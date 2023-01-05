import { Experiencias } from './../../models/experiencias';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exp-profissional',
  templateUrl: './exp-profissional.component.html',
  styleUrls: ['./exp-profissional.component.scss'],
})
export class ExpProfissionalComponent implements OnInit {
  expLista: Experiencias[] = [
    {
      cargo: 'Developer',
      empresa: 'Freelancer',
      duracao: 'Dez 2022 - Presente',
      descricao: [
        'Desenvolvimento de aplicações Web Full Stack com as tecnologias Spring boot e Angular.',
      ],
    },
    {
      cargo: 'Técnico de manutenção em celulares',
      empresa: 'DN Assistência Técnica',
      duracao: 'Jun 2021 - Presente',
      descricao: [
        'Consertos, manutenção de celulares, troca, reparo de peças e atualização de sistemas.',
      ],
    },
    {
      cargo: 'Aux. Administrativo',
      empresa: 'J H Comercio E Distribuicao LTDA',
      duracao: 'Jan 2017 - Mai 2021',
      descricao: [
        'Relatórios de contas a pagar, lançamento de notas fiscais, cadastro de produtos no estoque.',
      ],
    },
    {
      cargo: 'Técnico em Informática',
      empresa: 'MM Marins Comercio e Servicos de Informatica',
      duracao: 'Jan 2014 - Ago 16',
      descricao: [
        'Montagem, acabamento e manutenção de computadores.',
        'Identificação e correção de problemas em aparelhos eletrônicos.',
      ],
    },
    {
      cargo: 'Técnico em Informática',
      empresa: 'BLR Informática LTDA',
      duracao: 'Jan 2012 - Jun 2013',
      descricao: [
        'Montagem, acabamento e manutenção de computadores.',
        'Identificação e correção de problemas em aparelhos eletrônicos.',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
