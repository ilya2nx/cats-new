import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { newCatComponent } from './new-cat/new-cat.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { MakerComponent } from './maker/maker.component';
import { ListModule } from './list/list.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    newCatComponent,
    UpdateCatComponent,
    CreateComponent,
    MakerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ListModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
