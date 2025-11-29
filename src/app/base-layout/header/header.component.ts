import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { COMMON_EXPORTS } from '../../core/common-exports.constants';
declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, COMMON_EXPORTS],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUrl = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
    });
  }

  closeMenu() {
    const myCollapse = document.getElementById('navbarNav');
    if (myCollapse) {
      const bsCollapse = new bootstrap.Collapse(myCollapse, { toggle: false });
      bsCollapse.hide();
    }
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
