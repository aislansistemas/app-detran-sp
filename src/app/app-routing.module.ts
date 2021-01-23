import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HomeModule,
    TutorialModule,
    PrincipalModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
