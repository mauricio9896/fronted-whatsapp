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

  //? DATA DE PRUEBA
  private chats: allConversations[] = [
    {
      id:'1',
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg',
      name: 'Mauricio Buitrago',
      date: '3 Mar',
      message: "Esto es un message",
      state: true,
      amount_message: 4
    },
    {
      id:'2',
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg',
      name: 'Brayan Cadavid',
      date: '13 Mar',
      message: "Esto es un message",
      state: true,
      amount_message: 4
    },
    {
      id:'3',
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
      name: 'Luis Vera ',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 4
    },
    {
      id:'4',
      photo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg',
      name: 'Juan Pablo Murcia',
      date: '3 Mar',
      message: "Esto es un message de prueba",
      state: true,
      amount_message: 24
    },
  ];

  private messages : messagesModel[] = [
    {
      emitter:'client',
      message:'Hola'
    },
    {
      emitter:'user',
      message:'Hola'
    },
    {
      emitter:'client',
      message:'Como estas ?'
    },
    {
      emitter:'user',
      message:'Muy bien, gracias'
    },{
      emitter:'client',
      message:'Lorem Ipsum is simply dummy message of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy message ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently '
    },{
      emitter:'user',
      message:'Claro que si, estos son nuestros servicios'
    },
    {
      emitter:'user',
      message:'Lorem Ipsum is simply dummy message of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy message ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently '
    },{
      emitter:'user',
      message:'Claro que si, estos son nuestros servicios'
    },
  ];

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

}
