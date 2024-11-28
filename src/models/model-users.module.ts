import { Module } from '@nestjs/common';
import { ModelUsersService } from './model-users.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [ModelUsersService],
  imports: [DatabaseModule],
  exports: [ModelUsersService]
})
export class ModelUsersModule {}
