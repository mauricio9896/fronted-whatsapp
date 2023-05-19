import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { allConversations } from '../../models/bodyModel.model';

@Component({
  selector: 'app-userchat',
  templateUrl: './userchat.component.html',
  styleUrls: ['./userchat.component.scss']
})
export class UserchatComponent implements OnInit {

  @Input() chat !: allConversations;

  id !: string;
  search_text !: string;
  view_chat: boolean = false;

  constructor(private service:ChatService, private router: Router) { }

  ngOnInit(): void {
    this.service.state_chat$.subscribe((state) => {
      this.view_chat = state;
    });
  }

  changeState(){
    this.router.navigateByUrl('/home/chat');
    this.service.changeStateChat(false);
  }

}
