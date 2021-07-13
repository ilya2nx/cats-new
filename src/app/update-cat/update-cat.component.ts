import { Component, OnInit } from '@angular/core';
import { Cat } from '../app.service';

@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.scss']
})
export class UpdateCatComponent implements OnInit {

  constructor(public Cat: Cat) { }

  ngOnInit(): void {
  }

}
