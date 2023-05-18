import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CpfService } from 'src/app/services/validacao-cpf.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

import { AppComponent } from 'src/app/app.component';

import { Cliente } from '../interfaces/Cliente';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})

export class ClientFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Cliente>();

  @Input() btnText!: string;
  @Input() titulo!: string;

  userForm!: FormGroup;
  faTimes = faTimes;
  cpfValido: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  /* Inicialização do formulário */
  ngOnInit(): void {
    this.userForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      confirmacaoSenha: new FormControl('', [Validators.required]),
    });
  }

  /* Errado e imcompleto*/
  /* verificarCpf(): boolean {
    const cpfValue = this.userForm.get('cpf')!.value;
    return !this.cpfService.validarCpf(cpfValue);
  } */ 

  /* GETs dos itens do formulário */

  get nome() {
    return this.userForm.get('nome')!;
  }
  get cpf() {
    return this.userForm.get('cpf')!;
  }
  get dataNascimento() {
    return this.userForm.get('dataNascimento')!;
  }
  get telefone() {
    return this.userForm.get('telefone')!;
  }
  get email() {
    return this.userForm.get('email')!;
  }
  get senha() {
    return this.userForm.get('senha')!;
  }
  get confirmacaoSenha() {
    return this.userForm.get('confirmacaoSenha')!;
  }

  submit() {
    if (this.userForm.invalid) {
      return;
    }
    
    console.log(this.userForm.value);
    this.onSubmit.emit(this.userForm.value);
  }

  /*async createdHandler(cliente: Cliente) {

    console.log('deu bom');
   

  }*/
}