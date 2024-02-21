import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthGuard } from './auth.guard';
import { RegistrationService } from './registration.service';
import { AuthService } from './auth.service';
import { SearchProductComponent } from './search-product/search-product.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { ProductService } from './product.service';
import { ReviewService } from './review.service';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SearchService } from './search.service';
import { AdminLoginService } from './admin-login.service';
import { AdminService } from './admin.service';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { HomeService } from './home.service';
import { AdminGuard } from './admin.guard';
import { ShowReviewsComponent } from './show-reviews/show-reviews.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    SearchProductComponent,
    AddReviewComponent,
    HomeComponent,
    AdminComponent,
    AdminLoginComponent,
    UpdateReviewComponent,
    ShowReviewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [AuthGuard,AdminGuard,RegistrationService,AuthService,ProductService,ReviewService,SearchService,AdminLoginService,AdminService,HomeService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
