import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../models/chat-message-model';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() chatMessage: ChatMessage;
  useremail: string;
  username: string;
  timestamp: Date = new Date();
  messageContant: string;
  key: string;
  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.useremail = chatMessage.email;
    this.username = chatMessage.username;
    this.timestamp = chatMessage.timestamp;
    this.messageContant = chatMessage.message;
    this.key = chatMessage.key;
  }
  selectedMsg(key) {
    // console.log('calling 1' + key);
  }
}
