import { Injectable } from '@angular/core';
import { Livre } from '../Models/livre';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  getLivres()
  {
    if(localStorage.getItem("Livres"))
    {
      return JSON.parse( localStorage.getItem("Livres") ?? "");
    }
    return[];
  }
  setLivres(livres:Livre[])
  {
    localStorage.setItem("Livres",JSON.stringify(livres));
  }
}
