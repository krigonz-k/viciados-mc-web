import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeSmoothAnimation', [
      transition('* <=> *', [
        style({
          opacity: 0,
          transform: 'translateY(10px)'
        }),
        animate(
          '300ms ease-out',
          style({
            opacity: 1,
            transform: 'translateY(0px)'
          })
        )
      ])
    ])
  ]
})
export class AppComponent {
  title = 'viciados-mc';

  prepareRoute(outlet: any) {
    return outlet?.activatedRouteData?.['animation'] || null;
  }
}
