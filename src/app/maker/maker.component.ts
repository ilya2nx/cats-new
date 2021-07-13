import { Component, OnInit } from '@angular/core';
import { Cat } from '../app.service';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.scss']
})
export class MakerComponent implements OnInit {

  constructor(public Cat: Cat) { }

  ngOnInit(): void {
  }
}
