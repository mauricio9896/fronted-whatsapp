import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss'],
})
export class ConversationsComponent implements OnInit {

  search_text = '';

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
      name: 'Mauricio Buitrago',
      date: '13 Mar',
      message: "Esto es un message",
      state: true,
      amount_message: 4
    },
    {
      img: 'string',
      name: 'Mauricio Buitrago Puerto',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },
    {
      img: 'string',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },
    {
      img: 'string',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },
    {
      img: 'string',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },
    {
      img: 'string',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },
    {
      img: 'string',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },{
      img: 'string',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },{
      img: 'string',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },{
      img: 'string',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },{
      img: 'string',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },{
      img: 'string',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

export interface chat {
  img: string;
  name: string;
  date: string; // hora y fecha en datatime
  message: string;
  amount_message: number;
  state: boolean;
}
