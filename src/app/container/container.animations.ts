import {
  animate,
  animateChild,
  AnimationMetadata,
  group,
  query,
  style,
  transition,
  trigger
} from '@angular/animations';

export const leftToRight: AnimationMetadata[] = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%'
    })
  ], { optional: true }),
  query(':enter', [
    style({ right: '-100%' })
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('500ms ease-out', style({ right: '100%' }))
    ], { optional: true }),
    query(':enter', [
      animate('500ms ease-out', style({ right: '0%' }))
    ])
  ]),
  query(':enter', animateChild())
];

export const rightToLeft: AnimationMetadata[] = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ], { optional: true }),
  query(':enter', [
    style({ left: '-100%' })
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('500ms ease-out', style({ left: '100%' }))
    ], { optional: true }),
    query(':enter', [
      animate('500ms ease-out', style({ left: '0%' }))
    ])
  ]),
  query(':enter', animateChild())
];

export const topToBottom: AnimationMetadata[] = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      bottom: 0,
      right: 0
    })
  ], { optional: true }),
  query(':enter', [
    style({ bottom: '-100%' })
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('750ms ease-out', style({ bottom: '100%' }))
    ], { optional: true }),
    query(':enter', [
      animate('750ms ease-out', style({ bottom: '0' }))
    ])
  ]),
  query(':enter', animateChild())
];

export const bottomToTop: AnimationMetadata[] = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      bottom: 0,
      right: 0
    })
  ], { optional: true }),
  query(':enter', [
    style({ bottom: '100%' })
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('750ms ease-out', style({ bottom: '-100%' }))
    ], { optional: true }),
    query(':enter', [
      animate('750ms ease-out', style({ bottom: '0' }))
    ])
  ]),
  query(':enter', animateChild())
];

export const routingAnimations =
  trigger('routeAnimations', [
    // Landing
    transition('Landing => Signup', leftToRight),
    transition('Landing => Events', topToBottom),

    // Signup
    transition('Signup => Landing', rightToLeft),
    transition('Signup => Events', topToBottom),
    transition('Signup => Registered', leftToRight),

    // Events
    transition('Events => Signup', bottomToTop),
    transition('Events => Landing', bottomToTop),

    // Registered
    transition('Registered => Events', topToBottom)
  ]);
