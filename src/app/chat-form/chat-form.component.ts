import { Component, OnInit } from '@angular/core';

import { ChatService } from './../services/chat.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})

export class ChatFormComponent implements OnInit {
message: string;

  constructor( private _chatService: ChatService) { }

  ngOnInit() {
  }

  handleMessage() {
  this._chatService.sendMessage(this.message);
  this.message = '';
  }

  handleSubmit(event) {
   //  console.log(event, event.keyCode, event.keyIdentifier);
  if ( event.keyCode === 13 || event.keyCode === 'Enter') {
     this.handleMessage();
  }
  }
}
