import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ModelUsersService } from 'src/models/model-users.service';

@Injectable()
export class UsersService {

  constructor(
    private readonly user: ModelUsersService
  ){}

  create(createUserDto: CreateUserDto) {
    return this.user.createUser();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findAll(){
    return `this action returns all users`
  }
}
