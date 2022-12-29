import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../constants/endpoints";

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(
    private http: HttpClient
  ) { }

  getCats() {
    return this.http.get(Endpoints.CATS);
  }
}
