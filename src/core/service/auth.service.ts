import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../../shared/constants/endpoints";
import {shareReplay, tap} from "rxjs";
import {LoginRes} from "../model/loginRes";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string) {
    return this.http.post<LoginRes>(
      Endpoints.AUTH + '/login',
      {email, password}).pipe(
        tap(res => {
          this.setSession(res)
          this.isLoggedIn = true;
        }),
        shareReplay());
  }

  private setSession(res: LoginRes) {
    localStorage.setItem('accessToken', res['accessToken']);
    localStorage.setItem('refreshToken', res['refreshToken']);
  }

  getIsloggedIn() {
    return this.isLoggedIn;
  }
}
