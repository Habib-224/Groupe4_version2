import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { AuthentificationComponent } from './authentification/authentification.component';
AccueilComponent

const routes: Routes = [
  { path: '', component:  AuthentificationComponent},
  { path: 'accueil/:id', component: AccueilComponent },
  {path: 'corbeille/:id',component:CorbeilleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
