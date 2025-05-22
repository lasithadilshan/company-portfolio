import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Alice Smith',
      position: 'Chief Technology Officer',
      photo: 'assets/images/alice.jpg'
    },
    {
      name: 'Bob Johnson',
      position: 'Head of Marketing',
      photo: 'assets/images/bob.jpg'
    },
    {
      name: 'Carol Williams',
      position: 'Lead Developer',
      photo: 'assets/images/carol.jpg'
    },
    {
      name: 'David Brown',
      position: 'UI/UX Designer',
      photo: 'assets/images/david.jpg'
    }
    // Add more team members as needed
  ];
}
