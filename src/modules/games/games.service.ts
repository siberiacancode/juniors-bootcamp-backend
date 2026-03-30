import { Injectable } from '@nestjs/common';

import { GAMES } from './constants';
import { GetGamesFiltersDto, SearchGamesDto } from './dto';

interface GetPaginationParams<Item> {
  items: Item[];
  limit?: number;
  page?: number;
}

interface PaginationMeta {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}

interface PaginationResult<Item> {
  data: Item[];
  meta: PaginationMeta;
}

@Injectable()
export class GamesService {
  getGames() {
    return GAMES;
  }

  getGame(id: string) {
    return this.getGames().find((game) => game.id === id);
  }

  getFilteredGames(filters: GetGamesFiltersDto) {
    let filteredGames = this.getGames();

    if (typeof filters.year === 'number') {
      filteredGames = filteredGames.filter((game) => game.year === filters.year);
    }

    if (filters.genre?.length) {
      filteredGames = filteredGames.filter((game) =>
        filters.genre.some((genre) => game.genres.includes(genre))
      );
    }

    if (filters.search) {
      const search = filters.search.toLowerCase();
      filteredGames = filteredGames.filter(
        (game) =>
          game.name.toLowerCase().includes(search) ||
          game.description.toLowerCase().includes(search)
      );
    }

    return filteredGames;
  }

  searchAutocomplete(searchGamesDto: SearchGamesDto) {
    const normalizedSearch = searchGamesDto.search.toLowerCase().trim();
    const limit = searchGamesDto.limit ?? 8;

    if (!normalizedSearch) {
      return [];
    }

    return this.getGames()
      .filter(
        (game) =>
          game.name.toLowerCase().includes(normalizedSearch) ||
          game.description.toLowerCase().includes(normalizedSearch)
      )
      .sort((a, b) => {
        const aStartsWithName = a.name.toLowerCase().startsWith(normalizedSearch);
        const bStartsWithName = b.name.toLowerCase().startsWith(normalizedSearch);

        if (aStartsWithName !== bStartsWithName) {
          return aStartsWithName ? -1 : 1;
        }

        return a.name.localeCompare(b.name);
      })
      .slice(0, limit);
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
    const data = items.slice(startIndex, endIndex);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages
      }
    };
  }
}
