import {Component, Input} from '@angular/core';

@Component({
  selector: 'tag',
  templateUrl: 'tag.html'
})
export class TagComponent {
  @Input('name') _name;
  name: string;

  ngOnInit() {
    this.name = this._name;
  }
}
