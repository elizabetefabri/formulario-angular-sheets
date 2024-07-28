import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SheetService } from '../../Services/ServiceSheet/sheet.service';
import { Router } from '@angular/router';

const estados: { [key: string]: string } = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins"
};

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css'],
})
export class CreateDataComponent implements OnInit {
  googleSheetForm!: FormGroup;
  userName: string | null = '';

  constructor(
    private fb: FormBuilder,
    private serviceSheet: SheetService,
    private router: Router
  ) {
    this.googleSheetForm = this.fb.group({
      nomeCivil: ['', Validators.required],
      nomeReceita: ['', Validators.required],
      tituloEleitoral: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      dataExpedicaoRg: ['', Validators.required],
      orgaoExpedidorRg: ['', Validators.required],
      estadoExpedicaoRg: ['', Validators.required],
      documentoClasse: ['', Validators.required],
      municipioNascimento: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      nacionalidade: ['', Validators.required],
      nomeMae: ['', Validators.required],
      nomePai: ['', Validators.required],
      deficiencia: ['', Validators.required],
      qualDeficiencia: ['', Validators.required],
      telefone1: ['', Validators.required],
      appsDisponiveis: ['', Validators.required],
      telefone2: ['', Validators.required],
      appsDisponiveis2: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      racaCor: ['', Validators.required],
      genero: ['', Validators.required],
      identidadeGenero: ['', Validators.required],
      grauInstrucao: ['', Validators.required],
      ocupacao: ['', Validators.required],
      informarOutros: ['', Validators.required],
      adminPublica: ['', Validators.required],
    });
    this.userName = localStorage.getItem('userName');
  }
  ngOnInit(): void {}

  public onSubmit() {
    if (this.googleSheetForm.valid) {
      console.log(this.googleSheetForm.value);

      const usuarioLogado = this.googleSheetForm.value.usuarioLogado;
      const nomeCivil = this.googleSheetForm.value.nomeCivil;
      const nomeReceita = this.googleSheetForm.value.nomeReceita;
      const tituloEleitoral = this.googleSheetForm.value.tituloEleitoral;
      const cpf = this.googleSheetForm.value.cpf;
      const rg = this.googleSheetForm.value.rg;
      const dataExpedicaoRg = this.googleSheetForm.value.dataExpedicaoRg;
      const orgaoExpedidorRg = this.googleSheetForm.value.orgaoExpedidorRg;
      // const estadoExpedicaoRg = this.googleSheetForm.value.estadoExpedicaoRg;

      const formData = this.googleSheetForm.value;
      formData.estadoExpedicaoRg = estados[formData.estadoExpedicaoRg];

      const documentoClasse = this.googleSheetForm.value.documentoClasse;
      const municipioNascimento = this.googleSheetForm.value.municipioNascimento;
      const dataNascimento = this.googleSheetForm.value.dataNascimento;
      const nacionalidade = this.googleSheetForm.value.nacionalidade;
      const nomeMae = this.googleSheetForm.value.nomeMae;
      const nomePai = this.googleSheetForm.value.nomePai;
      const deficiencia = this.googleSheetForm.value.deficiencia;
      const qualDeficiencia = this.googleSheetForm.value.qualDeficiencia;
      const telefone1 = this.googleSheetForm.value.telefone1;
      const appsDisponiveis = this.googleSheetForm.value.appsDisponiveis;
      const telefone2 = this.googleSheetForm.value.telefone2;
      const appsDisponiveis2 = this.googleSheetForm.value.appsDisponiveis2;
      const estadoCivil = this.googleSheetForm.value.estadoCivil;
      const racaCor = this.googleSheetForm.value.racaCor;
      const genero = this.googleSheetForm.value.genero;
      const identidadeGenero = this.googleSheetForm.value.identidadeGenero;
      const grauInstrucao = this.googleSheetForm.value.grauInstrucao;
      const ocupacao = this.googleSheetForm.value.ocupacao;
      const informarOutros = this.googleSheetForm.value.informarOutros;
      const adminPublica = this.googleSheetForm.value.adminPublica;

      this.serviceSheet
        .createSheet(usuarioLogado,
          nomeCivil,
          nomeReceita,
          tituloEleitoral,
          cpf,
          rg,
          dataExpedicaoRg,
          orgaoExpedidorRg,
          formData.estadoExpedicaoRg,
          documentoClasse,
          municipioNascimento,
          dataNascimento,
          nacionalidade,
          nomeMae,
          nomePai,
          deficiencia,
          qualDeficiencia,
          telefone1,
          appsDisponiveis,
          telefone2,
          appsDisponiveis2,
          estadoCivil,
          racaCor,
          genero,
          identidadeGenero,
          grauInstrucao,
          ocupacao,
          informarOutros,
          adminPublica)
        .subscribe({
          next: (res) => {
            console.log(res);
            if (res) {
              this.router.navigate(['/list-data']);
            }
          },
          error: (error) => {
            console.log(error);
          },
        });
    } else {
      console.log('Formmulário inválido!');
    }
  }
}
