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

  constructor(private http: HttpClient) {}

  changeStateChat(template: boolean) {
    this.state_chat.next(template);
  }

  publicMessage(message: messagesModel) {
    this.messageSubject.next(message);
  }

  getAllConversations(): Observable<allConversations[]> {
    return this.http.get<allConversations[]>('http://localhost:3000/conversations');
  }

  getConversation(){
    return []
  }

  getTemplates():Observable<templateModel[]>{
    return this.http.get<templateModel[]>('http://localhost:3000/templates');
  }

  sendTemplate(template : templateModel): Observable<any> {
    return this.http.post('http://localhost:3000/sendTemplate', {template:JSON.stringify(template)});
  }

  sendMessage(message: messagesModel): Observable<any> {
    return this.http.post('http://localhost:3000/sendMessage', message);
  }
}
