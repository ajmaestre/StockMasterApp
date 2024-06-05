import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryService } from './category.service';
import { Subscription } from 'rxjs';
import { Categoria } from '../interfaces/categoria';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categorySubscription!: Subscription;
  categoriaList: Categoria[] = [];

  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
  	this.getCategories();
  }

  getCategories(){
    this.categorySubscription = this.categoryService.getCategories().subscribe({
      next: (res: Categoria[]) =>{
        this.categoriaList = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    }); 
  }

  ngOnDestroy(): void {
    this.categorySubscription.unsubscribe();
  }

}
