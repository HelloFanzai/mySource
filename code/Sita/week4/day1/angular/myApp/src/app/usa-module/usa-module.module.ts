import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NYCComponent } from "../nyc/nyc.component";
import { WashittonComponent } from "../washitton/washitton.component";

import { NYCModuleModule } from '../nycmodule/nycmodule.module'

@NgModule({
  declarations: [NYCComponent, WashittonComponent],
  imports: [
    CommonModule, NYCModuleModule
  ],
  exports: [NYCComponent, WashittonComponent]
})
export class UsaModuleModule { }
