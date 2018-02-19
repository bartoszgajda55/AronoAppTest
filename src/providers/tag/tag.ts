import { Injectable } from '@angular/core';
import tags from "../../data/tag.data";
import {TagGroup} from "../../models/tag-group.model";

@Injectable()
export class TagProvider {
  private tagGroups: TagGroup[];

  constructor() {
    this.tagGroups = <TagGroup[]>tags;
  }

  getTags(): TagGroup[] {
   return this.tagGroups.slice();
  }
}
