import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";


const routes: Routes = [  
  {path: '', component: CreateComponent, pathMatch: 'full' },
  {path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule)},
  {path: 'create/:id', loadChildren: () => import('./create/create.module').then(m => m.CreateModule)}
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