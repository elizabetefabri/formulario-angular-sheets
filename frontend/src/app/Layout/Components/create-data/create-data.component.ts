import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      nomePai: [''],
      deficiencia: ['', Validators.required],
      qualDeficiencia: [''],
      telefone1: ['', Validators.required],
      appsDisponiveis: this.fb.array([], Validators.required),
      telefone2: [''],
      appsDisponiveis2: this.fb.array([]),
      estadoCivil: ['', Validators.required],
      racaCor: ['', Validators.required],
      genero: ['', Validators.required],
      identidadeGenero: [''],
      grauInstrucao: ['', Validators.required],
      ocupacao: ['', Validators.required],
      informarOutros: [''],
      adminPublica: ['', Validators.required],
    });
    this.userName = localStorage.getItem('userName') || 'Usuário';
  }

  ngOnInit(): void {}

  get appsDisponiveis(): FormArray {
    return this.googleSheetForm.get('appsDisponiveis') as FormArray;
  }

  get appsDisponiveis2(): FormArray {
    return this.googleSheetForm.get('appsDisponiveis2') as FormArray;
  }

  onCheckboxChange(event: any, formArrayName: string) {
    const formArray: FormArray = this.googleSheetForm.get(formArrayName) as FormArray;

    if (event.target.checked) {
      formArray.push(this.fb.control(event.target.value));
    } else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  public onSubmit() {
    if (this.googleSheetForm.valid) {
      console.log(this.googleSheetForm.value);

      const formData = this.googleSheetForm.value;
      formData.estadoExpedicaoRg = estados[formData.estadoExpedicaoRg];
      formData.appsDisponiveis = this.appsDisponiveis.value;
      formData.appsDisponiveis2 = this.appsDisponiveis2.value;

      this.serviceSheet
        .createSheet(
          formData.usuarioLogado,
          formData.nomeCivil,
          formData.nomeReceita,
          formData.tituloEleitoral,
          formData.cpf,
          formData.rg,
          formData.dataExpedicaoRg,
          formData.orgaoExpedidorRg,
          formData.estadoExpedicaoRg,
          formData.documentoClasse,
          formData.municipioNascimento,
          formData.dataNascimento,
          formData.nacionalidade,
          formData.nomeMae,
          formData.nomePai,
          formData.deficiencia,
          formData.qualDeficiencia,
          formData.telefone1,
          formData.appsDisponiveis,
          formData.telefone2,
          formData.appsDisponiveis2,
          formData.estadoCivil,
          formData.racaCor,
          formData.genero,
          formData.identidadeGenero,
          formData.grauInstrucao,
          formData.ocupacao,
          formData.informarOutros,
          formData.adminPublica
        )
        .subscribe({
          next: (res) => {
            console.log(res);
            if (res) {
              this.router.navigate(['/formulario']);
            }
          },
          error: (error) => {
            console.log(error);
          },
        });
    } else {
      console.log('Formulário inválido!');
    }
  }
}
