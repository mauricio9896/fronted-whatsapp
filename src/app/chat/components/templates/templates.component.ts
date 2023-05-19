import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigateByUrl('home/chat/body')
  }

}
