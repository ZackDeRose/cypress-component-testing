import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nrwl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  components: string[];

  constructor(private router: Router) {
    this.components = this.router.config.map(x => x.path);
  }
}
