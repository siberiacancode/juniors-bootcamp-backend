import { Injectable } from '@nestjs/common';

interface WrapSuccess {
  (): { success: true };
  <Data extends Record<string, any>>(data: Data): { success: true } & Data;
}

interface WrapFail {
  (): { success: false; reason: string };
  (reason: string): { success: false; reason: string };
  <Data extends Record<string, any>>(
    reason: string,
    data: Data
  ): { success: false; reason: string } & Data;
}

@Injectable()
export class BaseResolver {
  protected wrapSuccess: WrapSuccess = (data?: any) => ({
    success: true,
    ...data
  });

  protected wrapFail: WrapFail = (reason?: string, data?: any) => ({
    success: false,
    reason,
    ...data
  });
}
