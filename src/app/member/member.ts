import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // bech yjib les boucles lkol
import { MatTableModule } from '@angular/material/table';
import { OnInit } from '@angular/core';
import { MemberService } from '../../service/member-service';
import { MatIconModule } from '@angular/material/icon'; 
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-member',
  imports: [CommonModule, MatTableModule, MatIconModule , RouterLink],
  templateUrl: './member.html',
  styleUrl: './member.css',

})
export class Member implements OnInit {
     constructor(private MS : MemberService) {} // injection du service MemberService pour utiliser ses méthodes
     dataSource :any[]=[]
     displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'createdDate' ,'5'];

  
     ngOnInit() {


     // appeler le service  = injecter + appeler la methode getAllMembers() du service MemberService
     this.MS.getAllMembers().subscribe((response) => {
          this.dataSource = response; }); // ya3ad à l'écoute ystnna fi les données li jeyin mel service 
    }

    delete(id : String){
      this.MS.delete({id:id,cin:'',name:'',type:''}).subscribe(
        () => {this.ngOnInit();}
      );
} 

}