import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'; 
import { MemberService } from '../../service/member-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-member-form',
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule ],

  templateUrl: './member-form.html',
  styleUrl: './member-form.css',
})
export class MemberForm implements OnInit {

       // inejction de dépendance du service MemberService pour pouvoir l'utiliser dans ce composant
       constructor(private MS: MemberService , private router: Router) {}
       form!:FormGroup;
       ngOnInit() {
          this.form = new FormGroup({
            cin: new FormControl(null),
            name: new FormControl(null),
            type: new FormControl(null),
          });
        }
        sub(){
          console.log(this.form.value);
          this.MS.AddMember(this.form.value).subscribe(
            () => {this.router.navigate(['']);}
          );
             
          
        }
       }

