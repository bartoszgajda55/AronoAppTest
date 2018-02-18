import { Component } from '@angular/core';
import {TagProvider} from "../../providers/tag/tag";
import {Tag} from "../../models/tag.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tags: Tag[];
  tagKeys: any;

  constructor(
    private tagProvider: TagProvider
  ) { }

  ionViewDidLoad() {
    this.tags = this.tagProvider.getTags();
    this.tagKeys = Object.keys(this.tags);
  }
}
