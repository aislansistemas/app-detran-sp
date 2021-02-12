import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticidadeCnhComponent } from './autenticidade-cnh/autenticidade-cnh.component';
import { AutenticidadeCnhModule } from './autenticidade-cnh/autenticidade-cnh.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { PrincipalComponent } from './principal/principal.component';
import { PrincipalModule } from './principal/principal.module';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TutorialModule } from './tutorial/tutorial.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'autenticidade-cnh',
    component: AutenticidadeCnhComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HomeModule,
    TutorialModule,
    PrincipalModule,
    AutenticidadeCnhModule,
    LoginModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
