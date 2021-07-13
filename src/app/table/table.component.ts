import { Component, OnInit } from '@angular/core';
import { Cat } from '../app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public Cat: Cat) { }

  ngOnInit(): void {
  }

}
