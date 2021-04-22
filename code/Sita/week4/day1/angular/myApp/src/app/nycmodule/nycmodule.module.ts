import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManhComponent } from '../manh/manh.component'
import { BrokComponent } from '../brok/brok.component'
  // import { from } from 'rxjs';


@NgModule({
  declarations: [ManhComponent,BrokComponent],
  imports: [
    CommonModule
  ],
  exports:[ManhComponent,BrokComponent]
})
export class NYCModuleModule { }
