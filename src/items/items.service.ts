import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';
import { UpdateItemDto } from './dto/update-item.dto';
@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const item = new Item(createItemDto);
    await this.entityManager.save(item);
  }

  async findAll() {
    return this.itemRepository.find();
  }

  findOne(id: number) {
    return this.itemRepository.findOneBy({ id });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} items`;
  }

  remove(id: number) {
    return `This action  removes a #${id} item`;
  }
}
