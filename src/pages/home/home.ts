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
    this.selectedTags = this.tagProvider.getSelectedTags();
  }

  updateData(): void {
    this.selectedTags = this.tagProvider.getSelectedTags();
  }
}
