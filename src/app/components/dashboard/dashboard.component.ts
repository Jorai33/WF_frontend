import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          // { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Que peut-on financer ?', cols: 1, rows: 1, content : 'J\'ai un client qui a un projet' },
          { title: 'Les #Wefinup', cols: 1, rows: 1 },
          { title: 'Suivi des dossiers de financement', cols: 1, rows: 1 }
        ];
      }

      return [
        // { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Que peut-on financer ?', cols: 1, rows: 2 },
        { title: 'Les #Wefinup', cols: 1, rows: 1 },
        { title: 'Suivi des dossiers de financement', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
