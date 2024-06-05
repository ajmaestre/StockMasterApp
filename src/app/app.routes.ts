import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AlmacenComponent } from './almacen/almacen.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', title: 'login', component: LoginComponent },
    { path: 'home', title: 'home', component: HomeComponent, 
    	children: [
    		{ path: 'categoria', title: 'categoria', component: CategoryComponent },
    		{ path: 'almacen', title: 'almacen', component: AlmacenComponent }
    	]
    }
];
 