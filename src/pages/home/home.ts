import {Component} from '@angular/core';
import {TagProvider} from "../../providers/tag/tag";
import {TagGroup} from "../../models/tag-group.model";
import {Tag} from "../../models/tag.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tagGroups: TagGroup[];
  selectedTags: Tag[] = [];

  constructor(private tagProvider: TagProvider) {
  }

  ionViewDidLoad() {
    this.tagGroups = this.tagProvider.getTags();
  }

  selectTag(group: number, tag: number): void {
    this.selectedTags.push(this.tagGroups[group]._tags[tag]);
  }

  removeSelectedTag(tag: Tag): void {
    let arrayElId = this.selectedTags.indexOf(tag);
    this.selectedTags.splice(arrayElId, 1);
  }
}
