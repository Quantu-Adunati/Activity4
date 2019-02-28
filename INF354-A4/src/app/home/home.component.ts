import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data:DataService) { }
  users:Object
  ngOnInit() {
    this.data.getUsers().subscribe(data=>{
      this.users = data; 
      console.log(this.users);
    });
  }

    firstClick()
    {
      if(this.h1Style == true)
      {
        this.h1Style = false;
      }
      else 
      {
        this.h1Style = true;
      }
      
      this.data.firstClick();
    }
}
