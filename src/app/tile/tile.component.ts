import { Component, OnInit } from '@angular/core';
import { AddCat } from '../app.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor(public addCat: AddCat) { }

  ngOnInit(): void {

  }

  // foo(id: number) {
  //   this.addCat.onLike(id)
  // }

}
