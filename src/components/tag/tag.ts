import {Component, Input} from '@angular/core';

@Component({
  selector: 'tag',
  templateUrl: 'tag.html'
})
export class TagComponent {
  @Input('name') _name;
  @Input('isToolbar') _isToolbar;
  name: string;
  isToolbar: boolean;

  ngOnInit() {
    this.name = this._name;
    this.isToolbar = this._isToolbar;
  }
}
