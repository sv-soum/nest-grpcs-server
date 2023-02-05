import { Injectable } from '@nestjs/common';
import { Hero, HeroById } from './proto/hero.pb';

@Injectable()
export class AppService {
  async findOneHero(data: HeroById): Promise<Hero> {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Javed' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
