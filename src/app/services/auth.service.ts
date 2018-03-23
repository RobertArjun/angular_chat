import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { ChatMessage } from './../models/chat-message-model';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;

  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _angularFireDatabase: AngularFireDatabase,
    private _router: Router
  ) {
    this.user = this._angularFireAuth.authState; //
  }

  signup(email: string, password: string, dispalyname: string) {

    return this._angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      this.authState = user;
      const status = 'online';
      this.setUserData(email, dispalyname, status);
    })
    .catch(error => console.log(error));
  }

  get currentUserID(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  authUser() {
    console.log(this.user);
  return this.user;
  }

  login(email: string, password: string) {
    return this._angularFireAuth.auth.signInWithEmailAndPassword(email, password)
    .then(reslove => {
      const status = 'online';
      this.setUserStatus(status);
      this._router.navigate(['\chat']);
    })
    .catch(error => console.log(error));
  }

  setUserData(email: string, dispalyname: string, status: string): void {
    const path = `users/${this.currentUserID}`;  // for string introplation we should use back tick (``)
    const data = {
      email: email,
      dispalyname: dispalyname,
      status: status
    };
    this._angularFireDatabase.object(path).update(data)
    .catch(error => console.log(error));
  }

  setUserStatus(status: string): void {
    const path = `users/${this.currentUserID}`; // for string introplation we should use back tick (``)
    const data = {
      status: status
    };
  }

  logout() {
    this._angularFireAuth.auth.signOut();
    const status = 'offline';
    this.setUserStatus(status);
    this._router.navigate(['login']);
  }
}
