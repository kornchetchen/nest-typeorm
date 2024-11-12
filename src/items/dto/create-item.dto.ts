import { Listing } from "../entities/listing.entity";
import { createListingDto } from "./create-listing.dto";

export class CreateItemDto {
  name: string;
  public: boolean;
  listing: createListingDto;
}
