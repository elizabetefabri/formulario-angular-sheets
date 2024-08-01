import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Layout/Components/login/login.component';
import { AppModuleModule } from './Shared/AppModule/app-module.module';
import { ErrorDialogComponent } from './Shared/Components/error-dialog/error-dialog.component';
import { CreateDataComponent } from './Layout/Components/create-data/create-data.component';
import { HeaderComponent } from './Layout/Components/header/header.component';
import { Step01CadastroCandidatoComponent } from './Layout/Components/create-data/step01-cadastro-candidato/step01-cadastro-candidato.component';
import { SelectEstadoComponent } from './Layout/Components/create-data/step01-cadastro-candidato/components/select-estado/select-estado.component';
import { InputTelefoneComponent } from './Layout/Components/create-data/step01-cadastro-candidato/components/input-telefone/input-telefone.component';
import { InputCpfComponent } from './Layout/Components/create-data/step01-cadastro-candidato/components/input-cpf/input-cpf.component';
import { InputRgComponent } from './Layout/Components/create-data/step01-cadastro-candidato/components/input-rg/input-rg.component';
import { InputTituloEleitoralComponent } from './Layout/Components/create-data/step01-cadastro-candidato/components/input-titulo-eleitoral/input-titulo-eleitoral.component';
import { SelectRacaComponent } from './Layout/Components/create-data/step01-cadastro-candidato/components/select-raca/select-raca.component';
import { SelectEstadoCivilComponent } from './Layout/Components/create-data/step01-cadastro-candidato/components/select-estado-civil/select-estado-civil.component';
import { SelectGrauInstrucaoComponent } from './Layout/Components/create-data/step01-cadastro-candidato/components/select-grau-instrucao/select-grau-instrucao.component';
import { SelectOcupacaoComponent } from './Layout/Components/create-data/step01-cadastro-candidato/components/select-ocupacao/select-ocupacao.component';
import { InputTelefone2Component } from './Layout/Components/create-data/step01-cadastro-candidato/components/input-telefone2/input-telefone2.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { InputDataExpedicaoComponent } from './Layout/Components/create-data/step01-cadastro-candidato/components/input-data-expedicao/input-data-expedicao.component';
import { InputDataNascimentoComponent } from './Layout/Components/create-data/step01-cadastro-candidato/components/input-data-nascimento/input-data-nascimento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorDialogComponent,
    CreateDataComponent,
    HeaderComponent,
    Step01CadastroCandidatoComponent,
    SelectEstadoComponent,
    InputTelefoneComponent,
    InputCpfComponent,
    InputRgComponent,
    InputTituloEleitoralComponent,
    SelectRacaComponent,
    SelectEstadoCivilComponent,
    SelectGrauInstrucaoComponent,
    SelectOcupacaoComponent,
    InputTelefone2Component,
    InputDataExpedicaoComponent,
    InputDataNascimentoComponent
  ],
  imports: [
    AppModuleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
