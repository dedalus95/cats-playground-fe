import {Component, OnInit} from '@angular/core';
import {CatsService} from "../../shared/service/cats.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private catsService: CatsService,
  ) { }

  ngOnInit(): void {
    this.catsService.getCats().subscribe(res => {
      console.log(res);
    });
  }
}
