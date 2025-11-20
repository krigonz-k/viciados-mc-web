import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RangosComponent } from './rangos/rangos.component';
import { PreciosComponent } from './precios/precios.component';

const routes: Routes = [
  { 
    path: '', 
    component: LandingComponent,
    data: { animation: 'LandingPage' }
  },
  { 
    path: 'rangos', 
    component: RangosComponent,
    data: { animation: 'RangosPage' }
  },
  { 
    path: 'precios', 
    component: PreciosComponent,
    data: { animation: 'PreciosPage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
