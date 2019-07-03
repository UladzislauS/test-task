import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { UsersResolver } from './resolvers/users.resolver';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    CoreModule,
    UsersListRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    UsersResolver
  ]
})
export class UsersListModule { }
