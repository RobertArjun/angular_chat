import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from './../models/chat-message-model';
import { User } from './../models/user.model';



@Injectable()
export class ChatService {
  user: firebase.User;
  chatMessages: AngularFireList<any>;
  chatMessage: ChatMessage;
  username: Observable<string>;

  constructor(private _angularFireDatabase: AngularFireDatabase,
  private _angularFireAuth: AngularFireAuth) {
   this._angularFireAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
            this.user = auth;
      }
    // this.getUser().
    this.getUser().snapshotChanges().subscribe(a => {
      console.log( a.payload.val());
        this.username = a.payload.val().dispalyname;
    });
    });
   }

   getUser() {
    const userid = this.user.uid; // getting to current user id
    const path = `/users/${userid}`; // get the current user path for wrapping display name from user
    return this._angularFireDatabase.object(path);
   }

   getUsers(): AngularFireList<User[]> {
    const path = '/users';
    return this._angularFireDatabase.list(path); // returning all user list
   }

  sendMessage(msg: string) {
   const timestamp = this.getTimestamp();
   const email = this.user.email;
   this.chatMessages = this.getMessages(); // retrevie msg from firebase


   // Pushing data to firebase
   this.chatMessages.push({
     message: msg,
     timestamp: timestamp,
     username: this.username,
     email: email
   });
  }

  getTimestamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                (now.getUTCMonth() + 1 ) + '/' +
                now.getUTCDay();
     const timestamp = now.getHours() + ':' +
                  now.getMinutes() + ':' +
                  now.getUTCSeconds();
  return (date + ' ' + timestamp);
  }
/*
  getMessages(): AngularFireList<ChatMessage[]> {
    return this._angularFireDatabase.list('messages', ref => ref.orderByKey().limitToLast(25));
  }*/

  getMessages() {
    return this._angularFireDatabase.list('messages', ref => ref.orderByKey().limitToLast(25));
  }
}
