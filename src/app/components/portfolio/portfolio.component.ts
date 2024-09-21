import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {
  projects = [
    { image: 'path/to/image1.jpg', translationKey: 'PROJECT1' },
    { image: 'path/to/image2.jpg', translationKey: 'PROJECT2' },
    { image: 'path/to/image3.jpg', translationKey: 'PROJECT3' }
  ];
  

  constructor() {}

  ngOnInit(): void {}
}
