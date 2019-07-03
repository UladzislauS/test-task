import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { map, first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { User, Users } from '../../../../interfaces';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: User[] = [];
  usersCount: number;
  currentPage: number;

  subscriptions: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initializeRoute();
    this.handlePagination();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  pageChanged(event: PageEvent): void {
    const page: number = event.pageIndex + 1;
    this.router.navigate(['./'], {
      queryParams: {
        page
      }
    });
  }

  userSelected(user: User): void {
    this.router.navigate(['./user', user.id]);
  }

  private initializeRoute(): void {
    const routeDataSubscription = this.activatedRoute.data.pipe(
        map(data => data.users)
      )
      .subscribe(users => this.setPageData(users));

    this.subscriptions.push(routeDataSubscription);
  }

  private handlePagination(): void {
    const routeParamsSubscription = this.activatedRoute.queryParams.subscribe(params => {
      if (+params.page === this.currentPage) {
        return;
      }

      this.apiService.fetchUsers(params.page)
        .pipe(
          first()
        )
        .subscribe(users => this.setPageData(users));
    });

    this.subscriptions.push(routeParamsSubscription);
  }

  private setPageData(users: Users): void {
    this.userList = users.users;
    this.currentPage = users.page;
    this.usersCount = users.total;
  }
}
