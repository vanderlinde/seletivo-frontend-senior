import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IInformacao, IPessoa } from '../detalhes-desaparecido';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DetalhesDesaparecidoService } from '../detalhes-desaparecido.service';

@Component({
  selector: 'app-enviar-informacoes',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './enviar-informacoes.component.html',
  styleUrl: './enviar-informacoes.component.css',
  providers:[DatePipe]
})
export class EnviarInformacoesComponent implements OnInit {

  acceptTypeFiles = '.png, .jpg, .jpeg';
  maxFileSize = 3 * 1024 * 1024;
  files: File[] = [];
  formFields: FormGroup;

  private desaparecido: IPessoa = inject<IPessoa>(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<EnviarInformacoesComponent>);

  constructor(
    private serviceDetalhesDesaparecido: DetalhesDesaparecidoService,
    private snackbar: MatSnackBar,
    private datePipe: DatePipe
  ) {
    this.formFields = new FormGroup({
      informacao: new FormControl('', Validators.required),
      data: new FormControl(null, Validators.required),
    })
  }

  ngOnInit() {
  }

  isFieldInvalid(nameField: string): boolean {
    const field = this.formFields.get(nameField);
    return (field?.invalid && field?.touched && field?.errors?.['required']) || false;
  }

  getSizeMbFile(file: File) {
    return `${(file.size / 1024 / 1024).toFixed(2)} mb`;
  }

  addFile(e: any) {
    for (let i = 0; i < e.target.files.length; i++) {
      let file = e.target.files[i] as File
      if (!!file) {
        if (file.size > this.maxFileSize) {
          this.snackbar.open(`O arquivo ${file.name} de ${Math.floor((file.size) / 1024 / 1024)}mb, excedeu o tamanho máximo de ${this.maxFileSize / 1024 / 1024}mb.`, 'Ok', { duration: 5000 })
          return
        }
        const extention = this.acceptTypeFiles.split(', ')
        let statusExt = false
        extention.forEach(ext => {
          if (file.name.includes(ext)) {
            statusExt = true
          }
        })
        if (!statusExt) {
          this.snackbar.open(`O arquivo ${file.name} não corresponde as extensões permitidas (${this.acceptTypeFiles}).`, 'Ok', { duration: 5000 })
          return
        }
        this.files = [...this.files, file]
      }
    }
  }

  removeFile(file: File){
    this.files = [...this.files.filter(f => f !== file)]
  }

  sendInformations() {
    if (!this.formFields.valid) {
      this.snackbar.open('Não foi possível enviar o formulário. Verifique os campos obrigatórios.', 'Ok')
      return
    };
    const information = this.formFields.value as IInformacao;
    information.files = this.files;
    information.ocoId = this.desaparecido.ultimaOcorrencia!.ocoId;
    information.data = this.datePipe.transform(
      information.data,
      'yyyy-MM-dd'
    )!;
    this.serviceDetalhesDesaparecido.sendInformationDesaparecido(information, this.dialogRef)
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
