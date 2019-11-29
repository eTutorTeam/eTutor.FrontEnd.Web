import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';


export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0
      }),
    ]),
    query(':enter', [
      animate('600ms ease', style({opacity: 1})),
    ]),
    query(':leave', [
      animate('650ms ease', style({opacity: 0}))
    ])
  ]),
]);
