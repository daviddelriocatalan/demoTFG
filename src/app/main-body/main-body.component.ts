import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

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
    "/assets/images/skyline2.jpg",
    "/assets/images/skyline3.jpg"
  ];

}
