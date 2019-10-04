import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';

import { AppComponent } from './app.component';
import { ParcialVotacaoComponent } from './parcial-votacao/parcial-votacao.component';
import { VotacaoComponent } from './votacao/votacao.component';

const appRoutes: Routes = [
  { path: 'parcial-votacao', component: ParcialVotacaoComponent, data: { title: 'Parcial da Votação' } },
  { path: 'votacao',         component: VotacaoComponent, data: { title: 'Votação' } },
  { path: '',   redirectTo: '/votacao', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    ParcialVotacaoComponent,
    VotacaoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    DropdownModule,
    ChartModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
