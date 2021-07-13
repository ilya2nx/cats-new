import { Component, OnInit } from '@angular/core';
import { Cat } from '../app.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor(public Cat: Cat) { }

  ngOnInit(): void {

  }

  // foo(id: number) {
  //   this.Cat.onLike(id)
  // }

}
