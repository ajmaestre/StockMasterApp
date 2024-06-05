import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, FooterComponent, CategoryComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  menu: string = "div-image show";

  showMenu(){
    if(this.menu == 'div-image'){
      this.menu = 'div-image show';
    }else{
      this.menu = 'div-image';
    }
  }

  ngOnInit(): void {
  }

}
