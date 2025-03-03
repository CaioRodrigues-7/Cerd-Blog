import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: 
  [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showToolbar: boolean = true;
  currentLayout: string = 'github';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/home') {
          this.currentLayout = 'blog'; // Altere para o layout do Blog
        } else {
          this.currentLayout = 'github'; // Volta para o layout do GitHub
        }
      });
  }

  toggleLayout() {
    // Alterna entre os layouts
    this.currentLayout = this.currentLayout === 'github' ? 'blog' : 'github';
  }
}
