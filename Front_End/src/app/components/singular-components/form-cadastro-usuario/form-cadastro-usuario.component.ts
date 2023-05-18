import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CpfService } from 'src/app/services/validacao-cpf.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

import { Cliente } from '../../interfaces/Cliente';

@Component({
  selector: 'app-form-cadastro-usuario',
  templateUrl: './form-cadastro-usuario.component.html',
  styleUrls: ['./form-cadastro-usuario.component.css'],
})

export class FormCadastroUsuarioComponent implements OnInit {
  @Input() btnText!: string;
  @Input() titulo!: string;

  @Output() onSubmit = new EventEmitter<Cliente>();

  userForm!: FormGroup;
  faTimes = faTimes;
  cpfValido: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  /* Inicialização do formulário */
  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      role: new FormControl(''),
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
    
    this.onSubmit.emit(this.userForm.value);
  }

  async createdHandler(cliente: Cliente) {
    const formData = new FormData();

    formData.append('nome', cliente.nome);
    formData.append('cpf', cliente.cpf);
    formData.append('dataNascimento', cliente.dataNascimento);
    formData.append('telefone', cliente.telefone);
    formData.append('email', cliente.email);
    formData.append('senha', cliente.senha);
    formData.append('confirmacaoSenha', cliente.confirmacaoSenha);

    await this.usuarioService.createCliente(formData).subscribe();

  }
}
