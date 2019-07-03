import { NgModule } from '@angular/core';
import { UserStubComponent } from './components/user/user.component.stub';
import { UserDataStubComponent } from './components/user-data/user-data.component.stub';

@NgModule({
  declarations: [
    UserStubComponent,
    UserDataStubComponent
  ],
  exports: [
    UserStubComponent,
    UserDataStubComponent
  ]
})
export class UserTestingModule { }
