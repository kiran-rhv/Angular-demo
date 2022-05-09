import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
  };

  isloggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private route: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {}

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe({
      next: (data) => {
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isloggedIn = true;
        this.toastr.success('User Logged In', 'Success');
        this.route.navigate(['home']);
      },
      error: (err) => {
        // this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.toastr.error('User Login Failed', 'Failed');
      },
    });
  }
}
