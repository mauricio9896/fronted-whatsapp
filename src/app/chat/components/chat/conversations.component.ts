import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { allConversations } from '../../models/bodyModel.model';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
})
export class ConversationsComponent implements OnInit {

  search_text: string = '';
  view_chat : boolean = false;
  chat !: allConversations ;
  all_conversations : allConversations[] = [];

  constructor(private router:Router, private service: ChatService) {}

  ngOnInit(): void {

    this.service.getAllConversations().subscribe(res=>{
      this.all_conversations = res;
    })

    this.service.state_chat$.subscribe((state) => {
      this.view_chat = state;
    });
  }

  viewChat(chat : allConversations){
    this.router.navigate(['home',{ outlets: { s: ['msg','body', chat.id] } }]);
    this.service.changeStateChat(true);
    this.chat = chat;
  }

  filterConversations(){
    console.log('this.search_text :>> ', this.search_text);
  }
}


