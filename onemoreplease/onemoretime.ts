

// // in this case it using one service.ts 
// import { Injectable } from '@nestjs/common';
// import { CreateItemDto } from './dto/create-item.dto';
// import { UpdateItemDto } from './dto/update-item.dto';
// import { EntityManager } from 'typeorm/entity-manager/EntityManager';
// import { Item } from './entities/item.entity';
// import { create } from 'domain';
// import { Column, Entity } from 'typeorm';

// //create class with @Inject entity for using in this create export class
// //can using this method for inject in other class 
// //and after that we has to announce for using this class with other function
// //want to using with this class
// @Injectable()
// export class ItemsService {
//   constructor(private readonly entityManager: EntityManager) {}
// }

// //about the entityManager has to configmore than not in this paeg

// //CRUD Methods create for uisng with typeOrm create database with CRUD action 

// async create(CreateItemDto:CreateItemDto) {
//     const item = new Item(CreateItemDto);
//     await this.entityManager.save(item);
//     return 'This action adds has been done with new item ';
// }

// //about thus create function has been createIemDto has type in typescript CreateItemDto

// findAll() {
//     return 'this action using to return all items';

// }

// //in this fundALl method using for find anything with you want in () parameter

// findOne(id:number){
//     return 'this action has been retuns a #${id} item';
// }

// UpdateItemDto(id:number , UpdateItemDto:UpdateItemDto) {
//     return `this action has been update #${id} item`;
// }
// // in this case it is id:nubmer parameter fo showing update about #{ID} you just udpate
// // them will have update Item in Dto create 

// remove(id:nubmer ){
//     return ` this action has remove already id #${id} item`;
// }


// // in this case we has create new item.entity for create entity in database column
// // on the file names item.entity.ts file 

// @Entity()
// export class Item {
//     @PrimaryGeneratedColumn()
//     id:number;

//     // in this create new class for using name is Item and has using @entity 
//     //@primaryGenerateColumn for create new colum in database and give datial with type
//     // in typscript languages is number fo insert id in database

//     @Column()
//     name:string
//     // in this create using column entity for create new column in database 
//     //and give column name is name can insert only string 

//     @Column({ default:true})
//     public: boolean;

//     //in this we using tihs column for defult so we has to explanin in progrmaing 
//     //it's defaul:true and we using for public column it mean other class entity can using 
//     //with this column because create defult and has give typeof it public boolean only 0 and 1 
//     //it meaning 1 open 0 is meaning close like this 

//     constructor(item:Partial<Item>) {
//         Object.assign(this,item);
//     }
//     //in this constructor meaing parameter of item 
//     // in this this <> in typescript meaning Generic Types 
//     //Generic mean can elastic using with function class can call this functino to using 
// }