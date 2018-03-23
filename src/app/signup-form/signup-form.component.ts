import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  email: string;
  password: string;
  displayname: string;
  errormessage: string;

  constructor(private _router: Router, private _authservice: AuthService) { }

  ngOnInit() {
  }

  signup() {
    const email = this.email;
    const password = this.password;
    const displayname = this.displayname;
    this._authservice.signup( email, password, displayname)
    .then(resolve => this._router.navigate(['\chat'])) // promises to naviagate to chat form
    .catch(error => this.errormessage = error.message);
  }
}
