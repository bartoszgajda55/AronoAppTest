import {Component} from '@angular/core';
import {TagProvider} from "../../providers/tag/tag";
import {TagGroup} from "../../models/tag-group.model";
import {Tag} from "../../models/tag.model";
import {AlertController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tagGroups: TagGroup[];
  selectedTags: Tag[] = [];

  constructor(private tagProvider: TagProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData(): void {
    this.tagGroups = this.tagProvider.getTags();
    this.selectedTags = this.tagProvider.getSelectedTags();
  }

  clearAllTags(): void {
    this.tagProvider.removeAllSelectedTags();
    this.tagProvider.sendTagRemoved('all');
    this.loadData();
  }

  arrayToString(array: Array<Tag>): string {
    let output = '';
    array.forEach(value => {
      output += value._name + ', ';
    });
    return output;
  }

  showSelectedTags(): void {
    let alert = this.alertCtrl.create({
      enableBackdropDismiss: true,
      message: `<strong>Selected Tags:</strong> ${this.arrayToString(this.selectedTags)}`,
      buttons: [
        {
          text: 'Cancel'
        }
      ]
    });
    alert.present();
  }
}
