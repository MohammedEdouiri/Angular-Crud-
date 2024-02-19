
import { Livre } from '../Models/livre';
import { LivreProxy } from '../ModelsProxy/livre-proxy';
import { LocalStorageService } from '../Services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
livres:Livre[];
constructor(private localStorageService:LocalStorageService)
{
  this.livres= [];

}
  ngOnInit(): void {
    this.livres= this.localStorageService.getLivres();
  }
  remove(index:number)
  {
      if(confirm("etes vous sur"))
      {
        this.livres.splice(index,1);
        this.localStorageService.setLivres(this.livres);
        
      }
  }
}
