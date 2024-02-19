import { Component } from '@angular/core';
import { Livre } from '../Models/livre';
import { LivreProxy } from '../ModelsProxy/livre-proxy';
import { LocalStorageService } from '../Services/local-storage.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  livre:LivreProxy;
  constructor(private localStorageService:LocalStorageService){
    this.livre=new LivreProxy();

  }
      add()
      {
        let livres:Livre[]=this.localStorageService.getLivres();
    
          this.livre.setCode();
          livres.push(this.livre.getLivre());
          this.livre=new LivreProxy();
          this.localStorageService.setLivres(livres);
         
          
      }

}
