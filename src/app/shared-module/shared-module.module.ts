import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuHeaderComponent } from './components/side-menu/header/header.component';
import { SideMenuItemsComponent } from './components/side-menu/items/items.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    HeaderComponent,
    SideMenuHeaderComponent,
    SideMenuItemsComponent,
  ],
  exports: [HeaderComponent, SideMenuHeaderComponent, SideMenuItemsComponent],
})
export class SharedModuleModule {}
