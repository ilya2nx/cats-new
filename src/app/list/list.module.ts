import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TableComponent } from "../table/table.component";
import { TileComponent } from "../tile/tile.component";
import { ListComponent } from "./list.component";

@NgModule({
  declarations: [
    ListComponent,
    TileComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path:'list', component: ListComponent, children: [
        {path:'tile', component: TileComponent},
        {path:'table', component: TableComponent}
      ]},
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class ListModule {

}