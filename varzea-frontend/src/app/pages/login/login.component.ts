import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Usuario = { username: '', password: '' };
  mensagem: string = '';
  carregando = false;

  constructor(private api: ApiService, private router: Router) {}

  login() {
    this.carregando = true;
    this.api.post('api/usuarios/login', this.usuario).subscribe({
      next: (res: any) => {
        this.mensagem = 'Login realizado!';
        this.carregando = false;
        // Aqui você pode salvar o usuário/token no localStorage
        setTimeout(() => this.router.navigate(['/']), 1000);
      },
      error: err => {
        this.mensagem = 'Usuário ou senha inválidos';
        this.carregando = false;
      }
    });
  }
}
