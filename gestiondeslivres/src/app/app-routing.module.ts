import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
/*lazy loading  */ {path :"bibliotheque" , loadChildren:()=> import ("./bibliotheque/bibliotheque.module").then(A=>A.BibliothequeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
