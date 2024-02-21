import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ShowReviewsComponent } from './show-reviews/show-reviews.component';
import { UpdateReviewComponent } from './update-review/update-review.component';

const routes: Routes = [
   {path:'',component:LoginComponent}, 
   {path:'loginsuccess',component:LoginsuccessComponent,canActivate:[AuthGuard]},
   {path:'registration',component:RegistrationComponent},
   {path:'login', component:LoginComponent},
   {path:'productList',component:ProductListComponent,canActivate:[AuthGuard]},
    {path:'searchProduct',component:SearchProductComponent,canActivate:[AuthGuard]},
    {path:'addReview',component:AddReviewComponent,canActivate:[AuthGuard]},
    {path:'home',component:HomeComponent},
    {path:'admin',component:AdminComponent,canActivate:[AdminGuard]},
    {path:'adminLogin',component:AdminLoginComponent},
    {path:'updateReview/:id',component:UpdateReviewComponent,canActivate:[AdminGuard]},
    {path:'showReviews/:productCode',component:ShowReviewsComponent,canActivate:[AuthGuard]}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
