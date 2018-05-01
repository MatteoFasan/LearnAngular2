import { Component, OnInit,Input } from '@angular/core';
import { User } from '../../model/user.component';

@Component({
  selector: 'userShow',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})

export class UserShowComponent implements OnInit {

  @Input() user:User;

  constructor() { }

  ngOnInit() {
  }

}
