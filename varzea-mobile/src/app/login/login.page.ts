import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class LoginPage {
  usuario = { username: '', password: '' };
  mensagem = '';
  carregando = false;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login() {
    this.carregando = true;
    this.usuarioService.login(this.usuario).subscribe({
      next: () => {
        this.mensagem = 'Login realizado!';
        this.carregando = false;
        setTimeout(() => this.router.navigate(['/home']), 1000);
      },
      error: () => {
        this.mensagem = 'Usuário ou senha inválidos';
        this.carregando = false;
      }
    });
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}
