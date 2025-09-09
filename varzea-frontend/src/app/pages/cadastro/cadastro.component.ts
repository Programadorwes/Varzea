import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario: Usuario = { username: '', password: '' };
  mensagem: string = '';
  carregando = false;

  constructor(private api: ApiService, private router: Router) {}

  cadastrar() {
    this.carregando = true;
    this.api.post('api/usuarios/cadastro', this.usuario).subscribe({
      next: () => {
        this.mensagem = 'Cadastro realizado com sucesso!';
        this.carregando = false;
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: err => {
        this.mensagem = 'Erro ao cadastrar: ' + (err.error?.message || 'Tente outro usuário');
        this.carregando = false;
      }
    });
  }
}
