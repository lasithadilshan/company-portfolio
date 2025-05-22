// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    {
      icon: 'bi bi-code-slash',
      title: 'Web Development',
      description: 'We build responsive and robust websites tailored to your business needs.'
    },
    {
      icon: 'bi bi-phone',
      title: 'Mobile App Development',
      description: 'Creating user-friendly mobile applications for both Android and iOS platforms.'
    },
    {
      icon: 'bi bi-bar-chart-line',
      title: 'Digital Marketing',
      description: 'Enhancing your online presence through strategic marketing solutions.'
    },
    {
      icon: 'bi bi-shield-lock',
      title: 'Cybersecurity',
      description: 'Protecting your digital assets with top-notch security measures.'
    }
  ];

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A scalable e-commerce platform with integrated payment solutions.',
      image: '../../../assets/images/project1.jpg'
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure and user-friendly mobile banking application.',
      image: '../../../assets/images/project2.jpg'
    },
    {
      title: 'Analytics Dashboard',
      description: 'An interactive dashboard for real-time data analytics.',
      image: '../../../assets/images/project3.jpg'
    }
  ];

  testimonials = [
    {
      client: 'Jane Doe',
      feedback: 'DevDroid transformed our online presence with their exceptional web development services.'
    },
    {
      client: 'John Smith',
      feedback: 'Their mobile app development team delivered a top-notch product that exceeded our expectations.'
    },
    {
      client: 'Emily Johnson',
      feedback: 'Thanks to DevDroid, our cybersecurity infrastructure is more robust than ever.'
    }
  ];
}
