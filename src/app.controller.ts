import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HEROES_SERVICE_NAME, HeroById } from './proto/hero.pb';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod(HEROES_SERVICE_NAME, 'FindOne')
  async getByUserId(payload: HeroById) {
    return await this.appService.findOneHero(payload);
  }
}
