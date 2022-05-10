import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any;
  public isCollapsed = true;
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.authService.Users().subscribe((users) => {
      this.users = users.data;
    });
  }

  userInfo(data: any) {
    this.route.navigate(['userdetail', { id: data.id }]);
  }
}
