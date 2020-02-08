import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [AuthModule, UsersModule, WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
