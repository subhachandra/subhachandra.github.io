import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dataMessage: string;
  constructor() {
    setInterval(() => {
         let currentDate = new Date();
         this.dataMessage = currentDate.toDateString() + ' '+ currentDate.toLocaleTimeString(); 
    },1000);
   }

  ngOnInit(): void {
  }

}
