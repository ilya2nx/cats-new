import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";
import { MakerComponent } from "./maker/maker.component";
import { TableComponent } from "./table/table.component";
import { TileComponent } from "./tile/tile.component";

const routes: Routes = [ 
  {path:'list', component: ListComponent, children: [
    {path:'tile', component: TileComponent},
    {path:'table', component: TableComponent}
  ]},
  {path: 'create', component: CreateComponent, children: [
    {path: 'maker', component: MakerComponent},
  ]},
  {path: 'maker/:id', component: MakerComponent},
  {path: '**', redirectTo: '/list/tile'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}