import { Component, OnInit } from '@angular/core';
import { AddCat } from '../app.service';

@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.scss']
})
export class UpdateCatComponent implements OnInit {

  constructor(public addCat: AddCat) { }

  ngOnInit(): void {
  }

}
