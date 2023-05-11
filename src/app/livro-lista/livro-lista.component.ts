import { Component } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent {

  public editoras: Array<Editora>;
  public livros: Array<Livro>;

  private controleEditora: ControleEditoraService;
  private controleLivros: ControleLivrosService;
  
  constructor(controleEditora: ControleEditoraService, controleLivros: ControleLivrosService) {
    this.controleEditora = controleEditora;
    this.controleLivros = controleLivros;
    this.editoras = this.controleEditora.obterEditoras();
    this.livros = this.controleLivros.obterLivros();
  }

  excluir = (codigo: number) => {
    this.controleLivros.excluir(codigo);
    this.livros = this.controleLivros.obterLivros();
  }
  
  obterNome = (codEditora: number) => {
    return this.controleEditora.obterNomeEditora(codEditora);
  }



}
