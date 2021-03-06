import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../interfaces';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {

  @Input() user: User;

  constructor() { }
}
