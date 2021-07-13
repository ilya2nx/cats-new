import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { newCatComponent } from './new-cat/new-cat.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { MakerComponent } from './maker/maker.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    TableComponent,
    newCatComponent,
    UpdateCatComponent,
    ListComponent,
    CreateComponent,
    MakerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
