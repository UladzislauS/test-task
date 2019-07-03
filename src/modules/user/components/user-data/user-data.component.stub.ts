import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../interfaces';

@Component({
  selector: 'app-user-data',
  template: '',
})
export class UserDataStubComponent {
  @Input() user: User;
}
