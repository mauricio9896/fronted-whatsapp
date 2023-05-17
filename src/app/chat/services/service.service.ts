import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private version : string = 'v16.0'
  private phone_id : string = "122311257521495"
  private recipient_phone : string = "573183833578"


  private url : string = `https://localhost:3000/sendTemplate`

  private body_mensagge : any = {
    messaging_product: "whatsapp",
    to: this.recipient_phone,
    type: "template",
    template: {
        name: "hello_world",
        language: {
            code: "en_US"
        }
    }
}
  constructor( private http : HttpClient) { }

  sendMesagge():Observable<any>{
    return this.http.post(this.url, this.body_mensagge);
  }
}
