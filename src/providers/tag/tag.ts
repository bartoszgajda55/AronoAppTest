import {Injectable} from '@angular/core';
import tags from "../../data/tag.data";
import {TagGroup} from "../../models/tag-group.model";
import {Tag} from "../../models/tag.model";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TagProvider {
  private tagGroups: TagGroup[];
  private selectedTags: Tag[] = [];
  private tagSubject = new Subject<Tag>();

  constructor() {
    this.tagGroups = <TagGroup[]>tags;
  }

  sendTagRemoved(tag: any) {
    this.tagSubject.next(tag);
  }

  getRemovedTag(): Observable<any> {
    return this.tagSubject.asObservable();
  }

  getTags(): TagGroup[] {
    return this.tagGroups.slice();
  }

  addTagToSelected(tag: Tag): void {
    this.selectedTags.push(tag);
  }

  removeTagFromSelected(tag: Tag): void {
    let arrayElId = this.selectedTags.indexOf(tag);
    this.selectedTags.splice(arrayElId, 1);
  }

  getSelectedTags(): Tag[] {
    return this.selectedTags;
  }

  isTagInSelected(tag: Tag): boolean {
    return this.selectedTags.indexOf(tag) !== -1;
  }

  removeAllSelectedTags(): void {
    this.selectedTags = [];
  }
}
