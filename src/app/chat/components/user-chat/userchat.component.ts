import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { allConversations } from '../../models/bodyModel.model';

@Component({
  selector: 'app-userchat',
  templateUrl: './userchat.component.html',
  styleUrls: ['./userchat.component.scss'],
})
export class UserchatComponent implements OnInit {
  @Input() chat!: allConversations;

  input_text: string = '';
  view_chat: boolean = false;

  constructor(private service: ChatService, private router: Router) {}

  ngOnInit(): void {
    this.service.state_chat$.subscribe((state) => {
      this.view_chat = state;
    });
  }

  changeState() {
    // this.router.navigateByUrl('/home/chat');
    this.router.navigate([{ outlets: { s: ['msg'] } }]);
    this.service.changeStateChat(false);
  }

  sendMessage(event: any) {

    if (
      (event.key === 'Enter' || event.keyCode === 13 || event.state === true) &&
      this.input_text != ''
    ) {
      const message = {
        emitter: 'user',
        message: this.input_text,
        id: this.chat.id,
        number: this.chat.number,
      };

      this.service.publicMessage(message);

      this.service.sendMessage(message).subscribe((res) => {

      });

      this.input_text = '';
    }
  }

  navigate(ruta: string) {
    // this.router.navigate([`/home/chat/${ruta}`, this.chat.id]);
    this.router.navigate([{ outlets: { s: ['msg',ruta, this.chat.id] } }]);

  }
}
