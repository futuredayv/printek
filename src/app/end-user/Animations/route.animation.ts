import {
    transition, group, query, style, animate
} from '@angular/animations';

export const routeAnimation = [
    // Services to Contact Component Transition
    transition('services => contact', group([

    query(':leave printek-printek-universe', [
        style({ height: '100%' })
    ], { optional: true }),

    query(':leave printek-printek-universe .barycenter', [
        animate('600ms 600ms ease', style({
            width: 'var(--cover)',
            height: 'var(--cover)'
        }))
    ], { optional: true }),

    query(':enter', [
        style({opacity: 0}),
        animate('600ms 1200ms ease', style({opacity: 1}))
    ], { optional: true })
    ])),


    // Contact to Services Component Transition
    transition('contact => services', group([

        query(':leave', [
            style({opacity: '*'}),
            animate('600ms ease', style({opacity: 0}))
        ], { optional: true }),

        query(':enter printek-printek-universe', [
            style({
            height: '100%'
            })
        ], { optional: true }),

        query(':enter printek-printek-universe .barycenter', [
            style({
                width: 'var(--cover)',
                height: 'var(--cover)'
            }),
            animate('600ms 600ms ease', style({
                width: '*',
                height: '*'
            }))
        ], { optional: true })
    ]))
]
