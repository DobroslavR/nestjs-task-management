import { AuthModule } from './auth/auth.module';
import { TYPE_ORM_CONFIG } from './config/typeorm.config';
import { TasksModule } from './tasks/tasks.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(TYPE_ORM_CONFIG), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
