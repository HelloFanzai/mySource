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
      // 停止
      this.isRunning = false;
      clearTimeout(this.timer);
      return;
    }
    
    this.isRunning = true;
    const next = () => {
      if (!this.isRunning) return;
      switch (this.currentLight) {
        case 'red':
          this.currentLight = 'yellow';
          this.timer = setTimeout(next, 2000);
          break;
        case 'yellow':
          this.currentLight = 'green';
          this.timer = setTimeout(next, 1000);
          break;
        case 'green':
          this.currentLight = 'red';
          this.timer = setTimeout(next, 3000);
          break;
      }
    };
    next();
  }

}
