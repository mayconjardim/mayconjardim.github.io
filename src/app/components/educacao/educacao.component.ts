import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'educacao',
  templateUrl: './educacao.component.html',
  styleUrls: ['./educacao.component.scss'],
})
export class EducacaoComponent implements OnInit {
  ngOnInit(): void {}

  cursosList: any[] = [
    {
      instituto: 'Algoritmos e Lógica de Programação',
      curso: 'Udemy & Nelio Alves',
      termino: '2021',
      certificado: '../../../assets/certificados/Logica.jpg',
    },
    {
      instituto: 'Java Programação Orientada a Objetos',
      curso: 'Udemy & Nelio Alves',
      termino: '2022',
      certificado: '../../../assets/certificados/Java-OO.jpg',
    },

    {
      instituto: 'Modelagem de Dados UML',
      curso: 'Udemy & Nelio Alves',
      termino: '2022',
      certificado: '../../../assets/certificados/bootcamp-spring.png',
    },

    {
      instituto: 'Bootcamp Spring Boot 3.0',
      curso: 'DevSuperior & Nelio Alves',
      termino: '2022',
      certificado: '../../../assets/certificados/UML.jpg',
    },

    {
      instituto: 'Formação Angular + Spring Boot',
      curso: 'Udemy & Valdir Cezar',
      termino: '2022',
      certificado: '../../../assets/certificados/Angular-Spring.jpg',
    },

    {
      instituto: 'Angular + Typescript Avançado',
      curso: 'Udemy & Dener Troquatte',
      termino: '2022',
      certificado: '../../../assets/certificados/Angular.jpg',
    },
  ];
}
