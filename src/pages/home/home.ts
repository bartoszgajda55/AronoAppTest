import { Component } from '@angular/core';
import {TagProvider} from "../../providers/tag/tag";
import {TagGroup} from "../../models/tag-group.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tagGroups: TagGroup[];

  constructor(
    private tagProvider: TagProvider
  ) { }

  ionViewDidLoad() {
    this.tagGroups = this.tagProvider.getTags();
  }
}
