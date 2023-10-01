import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private route: Router) {
  }

  loadComponent() {
    this.route.navigate(['/second-component']);
  }
}
