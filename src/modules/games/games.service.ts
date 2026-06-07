import { Injectable } from '@nestjs/common';

import { GameFilter, GAMES, GameType, GameView } from './constants';
import { GetEditionsDto, GetGamesDto, GetRegionsDto, SearchGamesDto } from './dto';
import { DetailedGame, FilteredGame, GamesPaginationMeta } from './entities';

interface GetPaginationParams<Item> {
  items: Item[];
  limit?: number;
  page?: number;
}

interface PaginationResult<Item> {
  games: Item[];
  meta: GamesPaginationMeta;
}

const POPULAR_TIME_RANGE = 60 * 60 * 24 * 365 * 3; // 3 года

@Injectable()
export class GamesService {
  getGames() {
    return GAMES;
  }

  getGame(slug: string): DetailedGame {
    const game = this.getGames().find((game) => game.slug === slug);

    if (!game) return undefined;

    const deliveryTypes = [...new Set(game.priceVariants.map((variant) => variant.deliveryType))];

    return {
      deliveryTypes,
      description: game.description,
      genres: game.genres,
      image: game.image,
      developer: game.developer,
      externalId: game.externalId,
      minimumSystemRequirements: game.minimumSystemRequirements,
      name: game.name,
      publisher: game.publisher,
      recommendedSystemRequirements: game.recommendedSystemRequirements,
      releaseDate: game.releaseDate,
      screenshots: game.screenshots,
      slug: game.slug,
      type: game.type
    };
  }

  getFilteredGames(dto: GetGamesDto): FilteredGame[] {
    const filteredGames = this.getGames().filter((game) => {
      if (dto.filter.length) {
        if (
          dto.filter.includes(GameFilter.DISCOUNT) &&
          !game.priceVariants.some((variant) => variant.oldPrice)
        )
          return false;

        if (dto.filter.includes(GameFilter.DLC) && game.type !== GameType.DLC) return false;
      }

      if (dto.view) {
        if (dto.view === GameView.POPULAR && !game.isPopular) return false;

        if (dto.view === GameView.NEW && game.releaseDate < Date.now() - POPULAR_TIME_RANGE)
          return false;
      }

      if (dto.genre.length && !dto.genre.some((genre) => game.genres.includes(genre))) return false;

      return true;
    });

    return filteredGames.map((game) => {
      const priceVariant = game.priceVariants.reduce(
        (min, current) => (current.price < min.price ? current : min),
        game.priceVariants[0]
      );
      return {
        priceVariant: {
          id: priceVariant.id,
          deliveryType: priceVariant.deliveryType,
          edition: priceVariant.edition,
          oldPrice: priceVariant.oldPrice,
          price: priceVariant.price,
          region: priceVariant.region
        },
        image: game.image,
        name: game.name,
        slug: game.slug,
        type: game.type,
        genres: game.genres,
        isPopular: game.isPopular,
        releaseDate: game.releaseDate
      };
    });
  }

  searchAutocomplete(searchGamesDto: SearchGamesDto): FilteredGame[] {
    const normalizedSearch = searchGamesDto.search.toLowerCase().trim();
    const limit = searchGamesDto.limit ?? 8;

    if (!normalizedSearch) return [];

    return this.getGames()
      .filter(
        (game) =>
          game.name.toLowerCase().includes(normalizedSearch) ||
          game.description.toLowerCase().includes(normalizedSearch)
      )
      .slice(0, limit)
      .map((game) => {
        const priceVariant = game.priceVariants.reduce(
          (min, current) => (current.price < min.price ? current : min),
          game.priceVariants[0]
        );
        return {
          priceVariant: {
            id: priceVariant.id,
            deliveryType: priceVariant.deliveryType,
            edition: priceVariant.edition,
            oldPrice: priceVariant.oldPrice,
            price: priceVariant.price,
            region: priceVariant.region
          },
          image: game.image,
          name: game.name,
          slug: game.slug,
          type: game.type,
          genres: game.genres,
          isPopular: game.isPopular,
          releaseDate: game.releaseDate
        };
      })
      .sort((a, b) => {
        const aStartsWithName = a.name.toLowerCase().startsWith(normalizedSearch);
        const bStartsWithName = b.name.toLowerCase().startsWith(normalizedSearch);

        if (aStartsWithName !== bStartsWithName) {
          return aStartsWithName ? -1 : 1;
        }

        return a.name.localeCompare(b.name);
      });
  }

  getRegions(dto: GetRegionsDto) {
    const game = this.getGames().find((game) => game.slug === dto.slug);

    if (!game) return undefined;

    return game.priceVariants
      .filter((variant) => variant.deliveryType === dto.deliveryType)
      .map((variant) => variant.region);
  }

  getEditions(dto: GetEditionsDto) {
    const game = this.getGames().find((game) => game.slug === dto.slug);

    if (!game) return undefined;

    return game.priceVariants
      .filter(
        (variant) => variant.deliveryType === dto.deliveryType && variant.region === dto.region
      )
      .map((variant) => variant.edition);
  }

  getPagination<Item>({
    items,
    page = 1,
    limit = 10
  }: GetPaginationParams<Item>): PaginationResult<Item> {
    const total = items.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + limit, total);
    const games = items.slice(startIndex, endIndex);

    return {
      games,
      meta: {
        total,
        page,
        limit,
        totalPages
      }
    };
  }
}
