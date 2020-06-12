import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserInputsComponent } from './components/user-inputs/user-inputs.component';

const routes: Route[] = [
  {
    path: 'user-inputs',
    component: UserInputsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PageRouteingModule {}
