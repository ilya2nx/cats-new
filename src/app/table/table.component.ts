import { Component, OnInit } from '@angular/core';
import { AddCat } from '../app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public addCat: AddCat) { }

  ngOnInit(): void {
  }

}
