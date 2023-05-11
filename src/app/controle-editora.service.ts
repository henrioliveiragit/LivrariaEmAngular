import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})

export class ControleEditoraService {
  editoras: Array<Editora>

  //funcao recebe codeditora do tipo number como parametro e retorna o nome da editora em string

  obterNomeEditora(codEditora: number): string {
    for (let editora of this.editoras) {
      if (editora.codEditora == codEditora) {
        return editora.nome;
      }
    }
    return '';
  }

  //funcao retorna um array de editoras

  obterEditoras(): Array<Editora> {
    return this.editoras;
  }

  constructor() {
    this.editoras = new Array<Editora>();
    this.editoras.push(new Editora(1, 'Editora 1'));
    this.editoras.push(new Editora(2, 'Editora 2'));
    this.editoras.push(new Editora(3, 'Editora 3'));
  }
}
