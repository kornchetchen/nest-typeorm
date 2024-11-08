import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (ConfigService) => ({
        type: 'mysql',
        host: ConfigService.get('MYSQL_HOST'),
        port: ConfigService.get('MYSQL_PORT'),
        database: ConfigService.get('MYSQL_DATABASE'),
        username: ConfigService.get('MYSQL_USERNAME'),
        password: ConfigService.get('MYSQL_PASSWORD'),
        autoLoadEntities: true,
        synchronize: ConfigService.get('MYSQL_SYNCHRONIZE'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
