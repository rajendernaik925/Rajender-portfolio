import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
logo: string = 'images/black-theme-my-image.png';
// logo: string = 'images/black-sitting-image.png';

downloadResume() {
    const link = document.createElement('a');
    link.href = '/images/Rajender Resume (experience).pdf'; // or 'Rajender Resume (experience).pdf'
    link.download = 'Rajender Resume (experience).pdf';
    link.click();
  }
}
