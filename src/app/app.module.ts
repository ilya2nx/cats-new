import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { tempCatComponent } from './new-cat/new-cat.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    TableComponent,
    tempCatComponent,
    UpdateCatComponent
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
