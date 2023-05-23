import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { allConversations, messagesModel } from '../models/bodyModel.model';

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
      id:'1',
      number: "573183833578",
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message",
      state: true,
      amount_message: 4
    },
    {
      id:'2',
      number: "573185454867",
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg',
      name: 'Brayan Cadavid',
      date: '13 Mar',
      message: "Esto es un message",
      state: true,
      amount_message: 4
    },
    {
      id:'3',
      number: "573183833578",
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
      name: 'Luis Vera ',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },
    {
      id:'4',
      number: "573114744623",
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },
  ];

  private messages : messagesModel[] = [];

  constructor(private http: HttpClient) {}

  getAllConversations():allConversations[]{
    return this.chats;
  }

  getConversation(){
    return this.messages;
  }

  changeStateChat(template : boolean){
    this.state_chat.next(template)
  }

  enviarMensaje(message: messagesModel) {
    this.messageSubject.next(message);
  }

  prueba(): Observable<any> {
    return this.http.get("http://localhost:3000/sendTemplate");
  }

  sendMessage(message : messagesModel):Observable<any> {
    return this.http.post("http://localhost:3000/sendMessage",{message});
  }
}
