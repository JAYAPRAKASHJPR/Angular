import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  tog: boolean = true;
  toggle(event) {
    if (this.tog == true) {
      this.tog = false;
    } else {
      this.tog = true;
    }

    return this.tog;
  }
}
