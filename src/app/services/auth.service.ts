import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      'https://reqres.in/api/login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(
      'https://reqres.in/api/register',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  // users(
  //   id: number,
  //   email: string,
  //   first_name: string,
  //   last_name: string
  // ): Observable<any> {
  //   return this.http.get(
  //     'https://reqres.in/api/users',
  //     {
  //       id,
  //       email,
  //       first_name,
  //       last_name,
  //     },
  //     httpOptions
  //   );
  // }
}
