import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any;
  public isCollapsed = true;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.authService.Users().subscribe((users) => {
      this.users = users.data;
    });
  }
}
