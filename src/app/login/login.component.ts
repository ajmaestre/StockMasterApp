import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';
import { Session } from '../interfaces/session';
import { Response } from '../interfaces/response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  data: FormGroup;
  sessionSubscription!: Subscription;
  session!: Session;

  constructor(private loginService: LoginService){
    this.data = new FormGroup({
      nombre: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required)
    });
  }

  getSession(){
    this.session = this.data.value;
      this.sessionSubscription = this.loginService.getSession(this.session).subscribe({
        next: (res: Response) =>{
          console.log(res);
          this.clearForm();
        },
        error: (err: any) => {
          console.log(err);
        }
      }); 
  }

  clearForm(){
    this.data.setValue({
      nombre: '',
      clave: ''
    });
  }

  ngOnDestroy(): void {
    this.sessionSubscription.unsubscribe();
  }

}
