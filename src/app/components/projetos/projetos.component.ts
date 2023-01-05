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
        'NBALiga é uma liga de simulação da NBA, Os membros da liga assumem o papel de' +
          'GM e podem fazer trocas, assinar jogador e outras utilidades na aplicação',
      ],
    },
    {
      titulo: 'Wallace Building Products',
      tecnologias: 'Spring, PostgreSQL, Angular e Boostrap',
      img: 'assets/projetos/wallacebp.png',
      descricao: [
        'Aplicação para gerenciamento de ordems de serviços, com uma interface prática os usuarios da' +
          'empresa conseguem gerenciar e acompanhar a movimentação de pedidos',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
