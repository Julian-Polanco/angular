import { RouterModule, Routes } from '@angular/router';
//import { AuthIsLoginGuard } from 'src/guards/auth-is-login.guard';
import { HomeComponent } from './components/home/home/home-ass.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: '**',
    component: HomeComponent
  },

];


export const routing = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});
