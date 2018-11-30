import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bartek Borowczak';
  color = 'blue';

  get styles() {
    return {
      'background': this.color,
      'color': 'white',
      'height': '100px'
    };
  }
}
