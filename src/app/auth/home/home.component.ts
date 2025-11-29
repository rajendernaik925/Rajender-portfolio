import { Component, inject, OnInit } from '@angular/core';
import { CoreService } from '../../core/services/core.services';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { COMMON_EXPORTS } from '../../core/common-exports.constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    COMMON_EXPORTS
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  private coreService: CoreService = inject(CoreService);
  logo: string = 'images/black-theme-my-image.png';
  n = 5;

  ngOnInit() {
    
    console.log(`n value : ${this.n}` )
   }

  routeEmployeeModule() {
    this.coreService.displayToast({
      type: 'success',
      message: 'Welcome to Indent Management Rajender'
    });
  }

  welcomeToast() {
    this.coreService.displayToast({
      type: 'success',
      message: 'Welcome to Indent Management Rajender'
    })
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = '/images/Rajender Resume (experience).pdf'; // or 'Rajender Resume (experience).pdf'
    link.download = 'Rajender Resume (experience).pdf';
    link.click();
  }

  hireMe() {
    const phoneNumber = "6303064263";
    const message = `Hello Rajender,

I visited your portfolio and I must say that I am genuinely impressed with your skills, projects, and overall presentation. Your experience, attention to detail, and the applications you’ve built clearly reflect strong technical ability and dedication.

I would like to connect with you regarding a potential opportunity that could be a great fit for your skill set. Please reach out when you are available.

Thank you.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }


}

