import { Component, OnInit } from '@angular/core';
import { messagesModel } from '../../models/bodyModel.model';

@Component({
  selector: 'app-body-chats',
  templateUrl: './body-chats.component.html',
  styleUrls: ['./body-chats.component.scss']
})
export class BodyChatsComponent implements OnInit {


  // data quemada
  messages : messagesModel[] = [
    {
      id:'client',
      text:'Hola'
    },
    {
      id:'user',
      text:'Hola'
    },
    {
      id:'client',
      text:'Como estas ?'
    },
    {
      id:'user',
      text:'Muy bien, gracias'
    },{
      id:'client',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently '
    },{
      id:'user',
      text:'Claro que si, estos son nuestros servicios'
    },
    {
      id:'user',
      text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently '
    },{
      id:'user',
      text:'Claro que si, estos son nuestros servicios'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}


