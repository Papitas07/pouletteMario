import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarioComponent } from './mario/mario.component';
import { PeachDirective } from './peach.directive';
import { MapComponent } from './map/map.component';
import { MapService } from './map.service';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './map/app-routes'
import { RouterModule } from '@angular/router';
import { PlayersnameComponent } from './playersname/playersname.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MarioComponent,
    PeachDirective,
    MapComponent,
    MenuComponent,
    PlayersnameComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
