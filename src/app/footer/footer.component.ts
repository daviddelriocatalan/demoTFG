import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  renderCarousel = undefined;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        this.renderCarousel = true;
      } else {
        this.renderCarousel = false;
      }
    });
  }

  ngOnInit() {
  }

  imagenes:String[]=[
    "/assets/images/ValenciaSkyLine.png",
    "/assets/images/freddie.jpg",
    "/assets/images/brian.jpg"
  ];

  
}
