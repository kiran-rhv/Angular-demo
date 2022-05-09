import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
  };

  isRegistered = false;
  isRegisterFailed = false;
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
    this.authService.register(email, password).subscribe({
      next: (data) => {
        this.tokenStorage.saveUser(data);
        this.isRegisterFailed = false;
        this.isRegistered = true;
        this.toastr.success('User Registered Successfully', 'Success');
        this.route.navigate(['login']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isRegisterFailed = true;
        this.toastr.error('User Registration Failed', 'Failed');
      },
    });
  }
}
