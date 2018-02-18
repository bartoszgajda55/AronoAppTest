import { Injectable } from '@angular/core';
import {Tag} from "../../models/tag.model";
import tags from "../../data/tag.data";

@Injectable()
export class TagProvider {
  private tags: Tag[];

  constructor() {
    this.tags = tags;
  }

  getTags(): Tag[] {
   return this.tags.slice();
  }
}
