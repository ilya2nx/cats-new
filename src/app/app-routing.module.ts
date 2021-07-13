import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { ListComponent } from "./list/list.component";
import { newCatComponent } from "./new-cat/new-cat.component";
import { TableComponent } from "./table/table.component";
import { TileComponent } from "./tile/tile.component";
import { UpdateCatComponent } from "./update-cat/update-cat.component";

const routes: Routes = [ 
  {path:'list', component: ListComponent, children: [
    {path:'tile', component: TileComponent},
    {path:'table', component: TableComponent}
  ]},
  {path: 'create', component: CreateComponent, children: [
    {path: 'new', component: newCatComponent},
    {path: 'update', component: UpdateCatComponent}
  ]},
  {path: '**', redirectTo: '/list/tile'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}