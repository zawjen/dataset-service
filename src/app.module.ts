import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MockMiddleware } from './middleware/mock.middleware';
import { DatasetController } from './dataset/dataset.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // This allows access to process.env globally
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log('IS_MOCK:', process.env.IS_MOCK);

    if (process.env.IS_MOCK === 'true') {
      consumer.apply(MockMiddleware).forRoutes(DatasetController);
    }
  }
}
