import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewCatComponent } from "./new-cat/new-cat.component";
import { TableComponent } from "./table/table.component";
import { TileComponent } from "./tile/tile.component";

const routes: Routes = [
  {path:'tile', component: TileComponent},
  {path:'table', component: TableComponent},
  {path: 'create', component: NewCatComponent},
  {path: '**', redirectTo: '/tile'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}