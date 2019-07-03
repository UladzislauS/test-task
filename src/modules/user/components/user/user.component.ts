import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../interfaces';
import { ApiService } from '../../../core/services/api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const userId: number = this.activatedRoute.snapshot.params['id'];
    this.apiService
      .fetchUserById(userId)
      .pipe(
        first()
      )
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  back(): void {
    this.router.navigate(['./users']);
  }
}
