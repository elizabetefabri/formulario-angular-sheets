import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserSheet } from 'src/app/Layout/Models/UserSheet';
import { SheetService } from 'src/app/Layout/Services/ServiceSheet/sheet.service';

@Component({
  selector: 'app-step01-cadastro-candidato',
  templateUrl: './step01-cadastro-candidato.component.html',
  styleUrls: ['./step01-cadastro-candidato.component.css']
})
export class Step01CadastroCandidatoComponent implements OnInit, OnChanges {
  @Input() googleSheetForm!: FormGroup;
  data$!: Observable<UserSheet[]>;

  constructor(private fb: FormBuilder, private sheetService: SheetService) {}

  ngOnInit(): void {
    // Initialization logic that doesn't depend on @Input properties can go here
    this.loadData();
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
    this.googleSheetForm.addControl('documentoClasse', this.fb.control(''));
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

  loadData() {
    this.data$ = this.sheetService.getData();
    this.data$.subscribe(data => {
      console.log('Data from Google Sheets:', data);
    });
  }

  onSubmit() {
    if (this.googleSheetForm.valid) {
      const formData: UserSheet = this.googleSheetForm.value;
      this.sheetService.addData(formData).subscribe(response => {
        console.log('Data added to Google Sheets:', response);
        this.loadData();
      });
    }
  }
}
