import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuHeaderComponent } from './components/side-menu/header/header.component';
import { SideMenuItemsComponent } from './components/side-menu/items/items.component';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [
    CardComponent,
    HeaderComponent,
    SideMenuHeaderComponent,
    SideMenuItemsComponent,
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    SideMenuHeaderComponent,
    SideMenuItemsComponent,
  ],
})
export class SharedModuleModule {}
