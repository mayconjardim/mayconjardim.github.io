import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-pessoal',
  templateUrl: './info-pessoal.component.html',
  styleUrls: ['./info-pessoal.component.scss'],
})
export class InfoPessoalComponent implements OnInit {
  data: string[][] = [
    ['Nome', 'Maycon Jardim'],
    ['Nascimento', '20/05/1994'],
    ['Educação', 'Análise e Desenvolvimento de Sistemas (JUL 2021 - DEZ 2023)'],
    ['Interesses', 'Futebol e Basketball'],
  ];

  sobre: string[] = [
    'Olá! Meu nome é Maycon Jardim, sou estudante de programação e estou a procura de oportunidades como programador.',
    'Durante minha graduação, ganhei uma base sólida em Angular e Java com Spring Boot e concluí uma série de projetos práticos que me permitiram desenvolver minhas habilidades e ganhar experiência prática. Além disso, estou sempre em busca de novas oportunidades para aprender e crescer, como participar de bootcamps.',
    'Estou ansioso para aplicar meus conhecimentos e habilidades em um ambiente de trabalho real e aprender com profissionais experientes.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
