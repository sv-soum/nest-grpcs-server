import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestMicroservice, Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HERO_PACKAGE_NAME } from './proto/hero.pb';

async function bootstrap() {
  const grpcApp: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: `0.0.0.0:50051`,
        package: HERO_PACKAGE_NAME,
        protoPath: join('../proto/hero.proto'),
      },
    },
  );

  await grpcApp.listen();
  new Logger('GRPC').log(`🚀🚀🚀 GRPC server started at port: 50051`);
}
bootstrap();
