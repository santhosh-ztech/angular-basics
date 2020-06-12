import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { UserInputsComponent } from './components/user-inputs/user-inputs.component';
import { PageRouteingModule } from './page-routeing.module';

@NgModule({
  imports: [CommonModule, IonicModule, PageRouteingModule, SharedModuleModule],
  declarations: [UserInputsComponent],
})
export class PagesModule {}
