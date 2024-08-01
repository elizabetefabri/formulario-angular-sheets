import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step01-cadastro-candidato',
  templateUrl: './step01-cadastro-candidato.component.html',
  styleUrls: ['./step01-cadastro-candidato.component.css']
})
export class Step01CadastroCandidatoComponent implements OnInit, OnChanges {
  @Input() googleSheetForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialization logic that doesn't depend on @Input properties can go here
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['googleSheetForm'] && this.googleSheetForm) {
      this.initializeForm();
    }
  }

  private initializeForm(): void {
    this.googleSheetForm.addControl('nomeCivil', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('nomeReceita', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('tituloEleitoral', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('cpf', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('rg', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('dataExpedicaoRg', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('orgaoExpedidorRg', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('estadoExpedicaoRg', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('documentoClasse', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('municipioNascimento', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('dataNascimento', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('nacionalidade', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('nomeMae', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('nomePai', this.fb.control(''));
    this.googleSheetForm.addControl('deficiencia', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('qualDeficiencia', this.fb.control(''));
    this.googleSheetForm.addControl('telefone1', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('appsDisponiveis', this.fb.array([], Validators.required));
    this.googleSheetForm.addControl('telefone2', this.fb.control(''));
    this.googleSheetForm.addControl('appsDisponiveis2', this.fb.array([]));
    this.googleSheetForm.addControl('estadoCivil', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('racaCor', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('genero', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('identidadeGenero', this.fb.control(''));
    this.googleSheetForm.addControl('grauInstrucao', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('ocupacao', this.fb.control('', Validators.required));
    this.googleSheetForm.addControl('informarOutros', this.fb.control(''));
    this.googleSheetForm.addControl('adminPublica', this.fb.control('', Validators.required));
  }
}
