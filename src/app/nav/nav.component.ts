import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CategoryComponent, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    
  }

  scrollTo(event: MouseEvent) {
    const target = event.target as HTMLAnchorElement;
    const fragment = target.getAttribute('fragment');
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    const links = document.querySelectorAll('ul li a');
    links.forEach(link => link.classList.remove('active'));
    target.classList.add('active');
  }
}
