import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliothequeRoutingModule } from './bibliotheque-routing.module';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { LivreComponent } from './Models/livre/livre.component';


@NgModule({
  declarations: [
    AddComponent,
    UpdateComponent,
    ListComponent,
    LivreComponent
  ],
  imports: [
    CommonModule,
    BibliothequeRoutingModule,
    FormsModule

  ]
})
export class BibliothequeModule { }
