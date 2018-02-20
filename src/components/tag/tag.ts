import {Component, Input} from '@angular/core';
import {Tag} from "../../models/tag.model";
import {TagProvider} from "../../providers/tag/tag";

@Component({
  selector: 'tag',
  templateUrl: 'tag.html'
})
export class TagComponent {
  @Input('tag') _tag: Tag;
  @Input('isToolbar') _isToolbar;
  name: string;
  isToolbar: boolean;
  state: string = 'unselected';
  tag: Tag;

  constructor(
    private tagProvider: TagProvider
  ) { }

  ngOnInit() {
    this.tag = this._tag;
    this.name = this._tag._name;
    this.isToolbar = this._isToolbar;
  }

  isSelected(): boolean {
    return this.state === 'selected';
  }

  addToSelected(): void {
    if (!this.tagProvider.isTagInSelected(this.tag)) {
      this.tagProvider.addTagToSelected(this.tag);
      this.state = 'selected';
    }
  }

  removeFromSelected(): void {
    this.tagProvider.removeTagFromSelected(this.tag);
  }
}
