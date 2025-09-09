import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class CadastroPage {
  usuario = { username: '', password: '' };
  mensagem = '';
  carregando = false;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  cadastrar() {
    this.carregando = true;
    this.usuarioService.cadastrar(this.usuario).subscribe({
      next: () => {
        this.mensagem = 'Cadastro realizado!';
        this.carregando = false;
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: () => {
        this.mensagem = 'Erro ao cadastrar. Tente outro usuário.';
        this.carregando = false;
      }
    });
  }
}
