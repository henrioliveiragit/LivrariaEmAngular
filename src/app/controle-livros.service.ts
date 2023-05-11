import { Injectable } from '@angular/core';
import { Livro } from './livro';
@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  
  livros: Array<Livro>

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    for (let i = 0; i < this.livros.length; i++) {
      if (this.livros[i].codigo == codigo) {
        this.livros.splice(i, 1);
        break;
      }
    }
  }


  constructor() { 
    this.livros = new Array<Livro>();

    this.livros.push(new Livro(1, 1, 'Livro 1', 'Resumo do livro 1', ['Autor 1', 'Autor 2']))
    this.livros.push(new Livro(2, 2, 'Livro 2', 'Resumo do livro 2', ['Autor 3', 'Autor 4']))
    this.livros.push(new Livro(3, 3, 'Livro 3', 'Resumo do livro 3', ['Autor 5', 'Autor 6']))

  }
}
