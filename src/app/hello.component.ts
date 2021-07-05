import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string;
  tog: boolean = true;
  ngOnInit() {
    console.log('initiated');
  }

  ngOnDestroy() {
    console.log('destoyed');
  }
  ngOnChanges(jp) {
    console.log('changes', jp);
  }
  constructor() {
    console.log('constructor');
  }
}
