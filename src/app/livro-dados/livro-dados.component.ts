import { Component } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent {

  public livro = Array<Livro>;
  public autoresForm: string;
  public editoras: Array<Editora>;
  public titulo: string = "";

  private router: Router;
  private controleEditora: ControleEditoraService;
  private controleLivros: ControleLivrosService;

  constructor(controleEditora: ControleEditoraService, controleLivros: ControleLivrosService, router: Router) {
    this.controleEditora = controleEditora;
    this.controleLivros = controleLivros;
    this.editoras = this.controleEditora.obterEditoras();
    this.router = router;
    this.autoresForm = '';
  }


  incluir = () => {
    let autores = this.autoresForm.split(',');
    let livro = new Livro(0, 0, "a", "s", autores);
    this.controleLivros.incluir(livro);
    this.router.navigate(['/lista']);
    
  }

}
