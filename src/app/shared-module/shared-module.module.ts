import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './components/card/card.component';
import { CodeFormatterComponent } from './components/code-formatter/code-formatter.component';
import { HeaderComponent } from './components/header/header.component';
import { InformationCardComponent } from './components/information-card/information-card.component';
import { SideMenuHeaderComponent } from './components/side-menu/header/header.component';
import { SideMenuItemsComponent } from './components/side-menu/items/items.component';
import { ToastService } from './services/toast-service';

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule],
  declarations: [
    CardComponent,
    HeaderComponent,
    InformationCardComponent,
    SideMenuHeaderComponent,
    SideMenuItemsComponent,
    CodeFormatterComponent,
  ],
  exports: [
    CardComponent,
    CodeFormatterComponent,
    HeaderComponent,
    InformationCardComponent,
    SideMenuHeaderComponent,
    SideMenuItemsComponent,
    // Services
    ToastService,
  ],
  providers: [ToastService],
})
export class SharedModuleModule {}
