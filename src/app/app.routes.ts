import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProductoComponent } from './componentes/producto/producto.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'nosotros', component: NosotrosComponent
    },
    {
        path: 'productos', component: ProductoComponent
    },
];
