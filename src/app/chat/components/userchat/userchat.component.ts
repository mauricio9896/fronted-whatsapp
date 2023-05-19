import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-userchat',
  templateUrl: './userchat.component.html',
  styleUrls: ['./userchat.component.scss']
})
export class UserchatComponent implements OnInit {


  id: string = '';
  search_text: string = '';
  view_chat: boolean = false;

  constructor(private activatedRoute:ActivatedRoute, private service:ChatService, private router: Router) { }

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe((userid)=>{
    //   this.id=userid['id']

    // })
    this.service.state_chat$.subscribe((state) => {
      this.view_chat = state;
    });
  }

  changeState(){
    this.router.navigateByUrl('/home/chat');
    this.service.changeStateChat(false);
  }

}
