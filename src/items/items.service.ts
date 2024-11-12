import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';
import { UpdateItemDto } from './dto/update-item.dto';
import { Listing } from './entities/listing.entity';
@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const listing = new Listing({
      ...createItemDto.listing,
      rating:0,
    }

    );
    const item = new Item({
      ...createItemDto,
      listing,
    }

    );
    await this.entityManager.save(item);
  }

  async findAll() {
    return this.itemRepository.find();
  }

  async findOne(id: number) {
    return this.itemRepository.findOne({
      where: { id },
      relations: { listing: true },
    })
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.itemRepository.findOneBy({ id });
    item.public = updateItemDto.public;
    await this.entityManager.save(item);
    return `This action updates a #${id} items`;
  }

  async remove(id: number) {
    await this.itemRepository.delete(id);
  }
}
