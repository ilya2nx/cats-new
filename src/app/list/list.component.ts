import { Component, OnInit } from '@angular/core';
import { Cat } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public Cat: Cat) { }

  ngOnInit(): void {
  }

}
