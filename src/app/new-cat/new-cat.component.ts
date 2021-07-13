import { Component, OnInit } from '@angular/core';
import { Cat } from '../app.service';

@Component({
  selector: 'app-new-cat',
  templateUrl: './new-cat.component.html',
  styleUrls: ['./new-cat.component.scss']
})
export class tempCatComponent implements OnInit {

  constructor(public Cat: Cat) { }

  ngOnInit(): void {
  }

}
