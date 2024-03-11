import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrl: './app.component.css',
  styles: [`
      h3{
        color: dodgerblue;
      }`]
})
export class AppComponent {
  name="Im in the app component"
}
