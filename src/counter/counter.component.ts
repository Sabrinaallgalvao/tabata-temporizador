import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  ngOnInit() {}

  interval = null;
  counter: number = 0;
  element: HTMLElement = null;
  element2: HTMLElement = null;
  element3: HTMLElement = null;

  constructor(e: HTMLElement, a: HTMLElement, c: HTMLElement) {
    this.element = e;
    this.element2 = a;
    this.element3 = c;
  }

  iniciar() {
    this.counter = 0;
    this.element.innerHTML = `${this.counter}s`;
    let tempoRestante = 0;
    let Acao: string = 'Descanso';
    let ciclo = 0;
    this.interval = setInterval(() => {
      this.counter++;
      tempoRestante = tempoRestante - 1;
      if (ciclo < 9) {
        if (tempoRestante <= 0) {
          if (Acao === 'Exercitar!') {
            Acao = 'Descanso';
            tempoRestante = 11;
            //tempoRestante = 6;
            this.counter = 0;
          } else if (ciclo < 8) {
            Acao = 'Exercitar!';
            tempoRestante = 21;
            //tempoRestante = 11;
            this.counter = 0;
            ciclo = ciclo + 1;
          } else {
            tempoRestante = 0;
            this.counter = 0;
            Acao = `ACABOU!`;
            clearInterval(this.interval);
            ciclo = 0;
          }

          this.element2.innerHTML = `${Acao}`;
          this.element3.innerHTML = `Ciclos: ${ciclo}`;
        }
        this.element.innerHTML = `${this.counter}s`;
        console.log(tempoRestante);
      }
    }, 1000);
  }
  parar() {
    this.counter = 0;
    this.element.innerHTML = `${this.counter}s`;
    this.element2.innerHTML = `Parado`;
    clearInterval(this.interval);
  }
}


