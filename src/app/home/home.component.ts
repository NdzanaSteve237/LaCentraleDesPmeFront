import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  swiper: Swiper;

  constructor() { }
   @ViewChild('carousel', { static: true }) carousel: ElementRef;
  @ViewChild('next', { static: true }) next: ElementRef;
  @ViewChild('prev', { static: true }) prev: ElementRef;

  timeRunning = 3000;
  timeAutoNext = 7000;
  runTimeOut: any;
  runNextAuto: any;

  ngAfterViewInit() {
    const nextDom = this.next.nativeElement;
    const prevDom = this.prev.nativeElement;
    const carouselDom = this.carousel.nativeElement;
    const SliderDom = carouselDom.querySelector('.list');
    const thumbnailBorderDom = carouselDom.querySelector('.thumbnail');
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    const timeDom = carouselDom.querySelector('.time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    nextDom.onclick = () => {
      this.showSlider('next', SliderDom, thumbnailBorderDom, carouselDom);
    };

    prevDom.onclick = () => {
      this.showSlider('prev', SliderDom, thumbnailBorderDom, carouselDom);
    };

    this.runNextAuto = setTimeout(() => {
      nextDom.click();
    }, this.timeAutoNext);
  }

  showSlider(type: string, SliderDom: any, thumbnailBorderDom: any, carouselDom: any) {
    const SliderItemsDom = SliderDom.querySelectorAll('.item');
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    
    if (type === 'next') {
      SliderDom.appendChild(SliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      carouselDom.classList.add('next');
    } else {
      SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      carouselDom.classList.add('prev');
    }

    clearTimeout(this.runTimeOut);
    this.runTimeOut = setTimeout(() => {
      carouselDom.classList.remove('next');
      carouselDom.classList.remove('prev');
    }, this.timeRunning);

    clearTimeout(this.runNextAuto);
    this.runNextAuto = setTimeout(() => {
      this.next.nativeElement.click();
    }, this.timeAutoNext);
  }

  ngOnInit() {
  }
  

  
 
  

}
