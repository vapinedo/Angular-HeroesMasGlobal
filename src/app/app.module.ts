import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// modulos propios
import { MaterialModule } from './modules/custom/custom-material.module';

// componentes propios
import { AppComponent } from './app.component';
import { ListaHeroesComponent } from './lista-heroes.component';
import { HeroesDcComponent } from './heroes-dc.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaHeroesComponent,
    HeroesDcComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
