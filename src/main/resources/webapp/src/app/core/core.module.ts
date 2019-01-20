import { NgModule } from '@angular/core';

import { PwaService} from './pwa/pwa.service';

@NgModule({
  providers: [
    PwaService
  ]
})
export class CoreModule {
}
