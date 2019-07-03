import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataComponent } from './user-data.component';
import { UserStubComponent } from '../user/user.component.stub';
describe('UserDataComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture < UserDataComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        declarations: [
          UserDataComponent,
          UserStubComponent
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
