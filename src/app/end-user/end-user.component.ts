import { Component, OnInit } from '@angular/core';
import {
  trigger, transition, group, query, style, animate, stagger, state
} from '@angular/animations';

import { UniversalService } from './universal.service';

@Component({
  selector: 'printek-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.scss'],
  animations: [
    trigger('route', [

      // Services to Contact Component Transition
      transition('services => contact', group([

        query(':leave printek-printek-universe', [
          style({
            height: '100%'
          })
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
    ]),

    trigger('aSecondPlease', [
      state('0', style({ display: 'none', transform: 'translateY(-400px)' })),
      state('1', style({ display: 'flex' })),

      // MenuView ON
      transition('0 => 1', group([

        animate('800ms 400ms ease-out', style({
          transform: 'translateY(0px)'
        })),

        query('printek-menu a', [
          style({
            opacity: 0,
            transform: 'scale(0.5)'
          }),
          stagger(-100 , animate('300ms 400ms ease', style({
            opacity: 1,
            transform: 'scale(1)'
          })))
        ], { optional: true })
      ])),

      // MenuView OFF
      transition('1 => 0', group([

        animate('800ms ease-out', style({
          transform: 'translateY(-264px)'
        })),

        query('printek-menu a', [
          stagger(100, animate('300ms ease', style({
            opacity: 0,
            transform: 'scale(0.5)'
          })))
        ], { optional: true })
      ]))
    ]),
  ]
})
export class EndUserComponent implements OnInit {

  menuView = false;


  constructor(private universal: UniversalService) { }

  ngOnInit() {
  }


  getState(o) {
    return o['page']
  }

  get isMobile() {
    return this.universal.isBrowser ?
      window.innerWidth <= 991 : false
  }

  toggleMenu() {
    if(this.isMobile)
      this.menuView = !this.menuView
  }

  scrollToBarycenter(o) {
    if(o['page'] === 'contact' && !this.menuView) {

      if(!this.universal.isBrowser)
        return;

      (document.querySelector('.barycenter') || document.body)
        .scrollIntoView({ behavior: 'smooth' });

      // Jumpy Fix
      // Setting scrollY to 0 prevents jumpy :enter
      // while navigating from 'printek-services' to 'printek-contact'
      setTimeout(_ => {
        (document.querySelector('.printek-page') || document.body)
          .scroll({ top: 0, behavior: 'instant' });
      }, 1200);
    }
  }
}
