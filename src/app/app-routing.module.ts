import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { MakerComponent } from "./maker/maker.component";

const routes: Routes = [ 
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