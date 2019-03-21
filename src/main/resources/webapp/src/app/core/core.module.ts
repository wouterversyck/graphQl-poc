import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';

@NgModule({
  imports: [
    CustomMaterialsModule,
    CommonModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ]
})
export class CoreModule {

}
