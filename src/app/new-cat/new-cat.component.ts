import { Component, OnInit } from '@angular/core';
import { AddCat } from '../app.service';

@Component({
  selector: 'app-new-cat',
  templateUrl: './new-cat.component.html',
  styleUrls: ['./new-cat.component.scss']
})
export class NewCatComponent implements OnInit {

  constructor(public addCat: AddCat) { }

  ngOnInit(): void {
  }

}
