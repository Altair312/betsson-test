import { animate, state, style, transition, trigger } from '@angular/animations';

const ANIMATION_DURATION = 400;

export const fadeInAnimation = [
  trigger('fadeIn', [

    state('in', style({opacity: 1})),

    transition(':enter',[
      style({opacity: 0}),
      animate(ANIMATION_DURATION)
    ]),
    transition(":leave",
    animate(ANIMATION_DURATION, style({opacity: 0})))
  ])
]