import { Projetos } from './../../models/projetos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent implements OnInit {
  projetos: Projetos[] = [
    {
      titulo: 'NBALiga Basketball',
      tecnologias: 'Spring, MySQL, Angular, Material e Bootstrap',
      img: 'assets/projetos/nbaliga2.png',
      repo: 'https://github.com/mayconjardim/nbaliga-frontweb',
      link: 'https://nbaliga-9b2b8.web.app/',
      descricao: [
        'NBALiga é uma liga fictícia de simulações da NBA onde membros da liga assumem papéis de GM e podem realizar trocas,' +
          'assinar com jogadores e performar diversas outras utilidades da aplicação.',
      ],
    },
    {
      titulo: 'Wallace Building Products',
      tecnologias: 'Spring, PostgreSQL, Angular e Boostrap',
      img: 'assets/projetos/wallacebp.png',
      descricao: [
        'Aplicação para gerenciamento de ordens de serviços onde por meio de uma interface prática os colaboradores da empresa conseguem' +
          'por meio de usuário e senha individual, gerenciar e acompanhar a movimentação de processos internos.',
      ],
    },
    {
      titulo: 'Donuts',
      tecnologias: 'Angular',
      img: 'assets/projetos/donuts.png',
      repo: 'https://github.com/mayconjardim/donuts',
      link: 'https://donuts-iota.vercel.app/admin/donuts',
      descricao: [
        'CRUD feito em Angular, projeto para aprender alguns conceitos do angular',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
