import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {
  projects = [
    { title: 'Residential Railing', image: 'assets/project1.jpg' },
    { title: 'Commercial Balcony Railing', image: 'assets/project2.jpg' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
