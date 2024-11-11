import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  create(createItemDto:CreateItemDto) {
    return ' this action adds new colums is already ';
  }

  findAll() {
    return `This action return all item you want `;
  }

  findOne(id:number){
    return `This action retun #${id} item`;
  }

  update(id:number,updateItemDto : UpdateItemDto){
    return ` This action update a #${id} item`;
  }

  remove(id:number) {
    return `this action udpate a #${id} item`;
  }
}