import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lights = ['red', 'yellow', 'green'];
  currentLight = 'red';
  currentIndex = 0;
  timer: any;
  isRunning = false;

  nextBt() {
    this.currentIndex = (this.currentIndex + 1) % this.lights.length;
    this.currentLight = this.lights[this.currentIndex];
  }

  autoBt() {
    if (this.isRunning) {
      this.isRunning = false;
      clearTimeout(this.timer);
      return;
    }
    
    this.isRunning = true;
    const next = () => {
      if (!this.isRunning) return;
      this.nextBt()
      switch (this.currentLight) {

        case 'red':
          this.timer = setTimeout(next, 1500);
          break;

        case 'yellow':  
          this.timer = setTimeout(next, 500);
          break;

        case 'green':
          this.timer = setTimeout(next, 2500);
          break;
      }
    };
    next();
  }

}
