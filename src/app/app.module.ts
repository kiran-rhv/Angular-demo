import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Components/header/header.component';
import { UsersComponent } from './Screens/users/users.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FeaturesComponent } from './Screens/features/features.component';
import { LoginComponent } from './Screens/login/login.component';
import { HomescreenComponent } from './Screens/homescreen/homescreen.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    FooterComponent,
    FeaturesComponent,
    LoginComponent,
    HomescreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
