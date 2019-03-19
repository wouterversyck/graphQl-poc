import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {DynamicImagesModule} from "../dynamic-images/dynamic-images.module";

@NgModule({
  imports: [
    CommonModule,
    DynamicImagesModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
