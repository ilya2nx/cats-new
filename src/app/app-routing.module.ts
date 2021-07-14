import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { TileComponent } from "./tile/tile.component";


const routes: Routes = [  
  {path: '', component: ListComponent, children: [
    {path:'', component: TileComponent}
  ] },
  {path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule)},
  {path: 'create/:id', loadChildren: () => import('./create/create.module').then(m => m.CreateModule)},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}