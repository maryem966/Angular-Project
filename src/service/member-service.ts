import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberModel } from '../models/MemberModel';

@Injectable({ //décorateur montre que le service accepte d'etre injecté dans d'autres composants ou services
  providedIn: 'root', // injection sur toute la route de l'application
})

export class MemberService {
  // toutes es méthodes qui generent des requetes de type http vers le backend 
  constructor(private http: HttpClient) {} // injection du service HttpClient pour effectuer des requêtes HTTP

  getAllMembers() {
    return this.http.get<any[]>('http://localhost:3000/members');
  }

  AddMember( m : MemberModel) {
    return this.http.post<void>('http://localhost:3000/members', m);
}

  delete( id : string) {
    return this.http.delete<void>('http://localhost:3000/members/' + `${id}`);
}
}