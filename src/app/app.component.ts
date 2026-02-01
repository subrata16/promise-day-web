import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hearts: any[] = [];

  ngOnInit() {
    // Generate 50 hearts with random positions and timings
    for (let i = 0; i < 50; i++) {
      this.hearts.push({
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 5
      });
    }
  }
}