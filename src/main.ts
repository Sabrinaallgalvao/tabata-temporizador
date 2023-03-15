import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  template: `
    <app-counter></app-counter>
  `,
})
export class App {
}

bootstrapApplication(App);
