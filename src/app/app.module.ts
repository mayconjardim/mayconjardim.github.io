import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoPessoalComponent } from './components/info-pessoal/info-pessoal.component';
import { EducacaoComponent } from './components/educacao/educacao.component';
import { ExpProfissionalComponent } from './components/exp-profissional/exp-profissional.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProjetosComponent } from './components/projetos/projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoPessoalComponent,
    EducacaoComponent,
    ExpProfissionalComponent,
    HabilidadesComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
