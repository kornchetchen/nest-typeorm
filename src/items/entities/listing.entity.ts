import { Column, Entity, PrimaryColumn } from "typeorm";
import { Item } from "./item.entity";

@Entity()
export class Listing {
    @PrimaryColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    rating: number;

    listing:Listing

    constructor(listing: Partial<Listing>) {
        Object.assign(this, Item);
    }
}