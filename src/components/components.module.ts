import { NgModule } from '@angular/core';
import { TagComponent } from './tag/tag';
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [TagComponent],
	imports: [
	  IonicModule.forRoot(TagComponent)
  ],
	exports: [TagComponent]
})
export class ComponentsModule {}
