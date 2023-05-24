import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { allConversations, messagesModel, templateModel } from '../models/bodyModel.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  private state_chat = new Subject<boolean>();
  state_chat$ = this.state_chat.asObservable();

  private messageSubject = new Subject<messagesModel>();
  message$ = this.messageSubject.asObservable();

  //! DATA DE PRUEBA
  private chats: allConversations[] = [
    {
      id: '1',
      number: '573183833578',
      photo:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: 'Esto es un message',
      state: true,
      amount_message: 4,
    },
    {
      id: '2',
      number: '573185454867',
      photo:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg',
      name: 'Brayan Cadavid',
      date: '13 Mar',
      message: 'Esto es un message',
      state: true,
      amount_message: 4,
    },
    {
      id: '3',
      number: '573183833578',
      photo:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
      name: 'Luis Vera ',
      date: '3 Mar',
      message: 'Esto es un message de prueba',
      state: true,
      amount_message: 4,
    },
    {
      id: '4',
      number: '573114744623',
      photo:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: 'Esto es un message de prueba',
      state: true,
      amount_message: 24,
    },
  ];
  private messages: messagesModel[] = [];
  private templates: templateModel[] = [
    {
      id: '1',
      name: 'hello_world',
      number: '573183833578',
      language: 'en_US',
      components:[
        {
          type: "body",
          parameters:[]
        }
      ],
      message: 'Welcome and congratulations!! This message demonstrates your ability to send a WhatsApp message notification from the Cloud API, hosted by Meta. Thank you for taking the time to test with us.'
    },
    {
      id: '2',
      name: 'first_message_test',
      number: '573183833578',
      language: 'es_MX',
      components:[
        {
          type: "body",
          parameters:[]
        }
      ],
      message: 'Hola Mauricio , espero te encuentres muy bien Me gustaría felictarte por todo el conocimiento que has estado adquiriendo'
    },
    {
      id: '3',
      name: 'second_template',
      number: '573183833578',
      language: 'es',
      components:[{
        type: "body",
        parameters:[
          {
            type: "text",
            text: "MAURICIO BUITRAGO"
          },
          {
            type: "text",
            text: "SEGUNDA VARIABLE"
          },
          {
            type: "text",
            text: "TERCERA VARIABLE"
          }
        ]
      }],
      message: 'hola {{1}} , esta es una plantilla de prueba con variable, {{2}} segunda variable y por ultimo {{3}} tercera variable'
    }
  ];

  constructor(private http: HttpClient) {}

  getAllConversations(): allConversations[] {
    return this.chats;
  }

  getConversation() {
    return this.messages;
  }
  getTemplates() {
    return this.templates;
  }

  changeStateChat(template: boolean) {
    this.state_chat.next(template);
  }

  publicMessage(message: messagesModel) {
    this.messageSubject.next(message);
  }

  sendTemplate(template : templateModel): Observable<any> {
    return this.http.post('http://localhost:3000/sendTemplate', {template:JSON.stringify(template)});
  }

  sendMessage(message: messagesModel): Observable<any> {
    return this.http.post('http://localhost:3000/sendMessage', message);
  }
}
