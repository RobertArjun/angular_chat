import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat-message-model';
import { ChatService } from '../services/chat.service';
import { AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
feed: ChatMessage[];
  constructor(private chat: ChatService) { }

  ngOnInit() {
    var feeds = this.chat.getMessages();
    feeds.snapshotChanges().subscribe(item => {
      this.feed = [] ;
      item.forEach( element => {
       var y = element.payload.val();
        y['key'] = element.key;
        this.feed.push(y as ChatMessage);
      } );
    });
  }

}
