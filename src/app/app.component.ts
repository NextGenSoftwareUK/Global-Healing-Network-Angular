import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './oasis/components/navbar/navbar.component';
import { StarFieldComponent } from './oasis/components/star-field/star-field.component';
import { KarmaToastComponent } from './oasis/components/karma-toast/karma-toast.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, StarFieldComponent, KarmaToastComponent, HomeComponent],
  template: `
    <oasis-star-field />
    <oasis-navbar />
    <main class="main-content">
      <ghn-home />
    </main>
    <oasis-karma-toast />
  `,
  styles: [`:host { display: block; } .main-content { position: relative; z-index: 1; }`]
})
export class AppComponent {}
