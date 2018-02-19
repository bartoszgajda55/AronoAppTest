import {Component, Input} from '@angular/core';

@Component({
  selector: 'tag',
  templateUrl: 'tag.html'
})
export class TagComponent {
  @Input('name') _name;
  @Input('isSelected') _isSelected;
  @Input('isToolbar') _isToolbar;
  name: string;
  isSelected: boolean;
  isToolbar: boolean;

  ngOnInit() {
    this.name = this._name;
    this.isSelected = this._isSelected;
    this.isToolbar = this._isToolbar;
  }
}
