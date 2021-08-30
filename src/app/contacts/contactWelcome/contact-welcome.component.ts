import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-welcome',
  templateUrl: './contact-welcome.component.html',
  styleUrls: ['./contact-welcome.component.css']
})
export class ContactWelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onHomePage(): void {
    this.router.navigate(['card']);
  }

}
