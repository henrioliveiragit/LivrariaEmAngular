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
  public editoras: Array<Editora>;

  public titulo: string = "";
  public resumo: string = "";
  public codEditora: number = 0;
  public autores: string = "";
  public autoresArray: Array<string> = [];
  public alerta = false;

  private router: Router;
  private controleEditora: ControleEditoraService;
  private controleLivros: ControleLivrosService;

  constructor(controleEditora: ControleEditoraService, controleLivros: ControleLivrosService, router: Router) {
    this.controleEditora = controleEditora;
    this.controleLivros = controleLivros;
    this.editoras = this.controleEditora.obterEditoras();
    this.router = router;
  }


  incluir = () => {

    if (this.titulo == "" || this.resumo == "" || this.codEditora == 0 || this.autores == "") {
      this.alerta = true;
      return;
    }
    else {
      let tamanho = this.controleLivros.obterLivros().length;

      this.autoresArray = this.autores.split(",");


      let livro = new Livro(tamanho + 1, this.codEditora, this.titulo, this.resumo, this.autoresArray);
      this.controleLivros.incluir(livro);
      this.router.navigate(['/lista']);
      console.log(livro)
    }



  }

}
