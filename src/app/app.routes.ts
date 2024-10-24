import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'lists',
    component: ListComponent,
  },
];
