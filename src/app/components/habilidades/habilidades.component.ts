import { Habilidades } from './../../models/habilidades';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidades[] = [
    {
      nome: 'JAVA, Spring Boot',
      img: 'assets/tecnologias/java.svg',
    },
    {
      nome: 'Angular, Material',
      img: 'assets/tecnologias/angular.svg',
    },
    {
      nome: 'HTML, CSS, JS',
      img: 'assets/tecnologias/htmlcssjs.png',
    },
    {
      nome: 'TypeScript',
      img: 'assets/tecnologias/typescript.svg',
    },
    {
      nome: 'Git, GitHub',
      img: 'assets/tecnologias/git.svg',
    },
    {
      nome: 'Sass',
      img: 'assets/tecnologias/sass.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
