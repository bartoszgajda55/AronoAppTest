import {Component, Input} from '@angular/core';

@Component({
  selector: 'tag',
  templateUrl: 'tag.html'
})
export class TagComponent {
  @Input('title') _title;
  @Input('isSelected') _isSelected;

  title: string;
  isSelected: boolean;

  constructor() { }

  ngOnInit() {
    this.title = this._title;
    this.isSelected = this._isSelected;
  }
}
