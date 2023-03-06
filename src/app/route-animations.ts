import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from '@angular/animations';

// basic fader animation
export const fader =
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)'
                })
            ]),
            query(':enter', [
                animate('300ms ease',
                style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
            ])
        ])
    ]);
    
// slide in animation
export const slider =
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    right: 0,
                    width: '100%',
                    transform: 'scale(1) translateY(0)'
                })
            ]),
            query(':enter', [
                style({ right: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('400ms ease-out', style({ right: '100%'}))
                ]),
                query(':enter', [
                    animate('400ms ease-out', style({ right: '0%'}))
                ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);

