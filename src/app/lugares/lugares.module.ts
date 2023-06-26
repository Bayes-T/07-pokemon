import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugaresInfoComponent } from './pages/lugares-info/lugares-info.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LugaresInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LugaresModule { }
