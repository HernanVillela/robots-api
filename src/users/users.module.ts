import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ModelUsersModule } from 'src/models/model-users.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [ModelUsersModule]
})
export class UsersModule {}
