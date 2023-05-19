import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
})
export class ConversationsComponent implements OnInit {

  search_text = '';
  view_chat : boolean = false;

  // DATA DE PRUEBA
  chats: chat[] = [
    {
      img: 'string',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message",
      state: true,
      amount_message: 4
    },
    {
      img: 'string',
      name: 'Brayan Cadavid',
      date: '13 Mar',
      message: "Esto es un message",
      state: true,
      amount_message: 4
    },
    {
      img: 'string',
      name: 'Luis Vera ',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },
    {
      img: 'string',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },
    {
      img: 'string',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },
    {
      img: 'string',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },{
      img: 'string',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },{
      img: 'string',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },{
      img: 'string',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },{
      img: 'string',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },{
      img: 'string',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },{
      img: 'string',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },
  ];

  constructor(private router:Router, private service: ChatService) {}

  ngOnInit(): void {

    this.service.state_chat$.subscribe((state) => {
      this.view_chat = state;
    });
  }





  viewChat(chat : chat){
    this.router.navigateByUrl('/home/chat/body')
    this.service.changeStateChat(true);
  }
}

export interface chat {
  img: string;
  name: string;
  date: string; // hora y fecha en datatime
  message: string;
  amount_message: number;
  state: boolean;
}
