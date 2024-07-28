import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { CreatePmeComponent } from './create-pme/create-pme.component';
import { ColorService } from './color.service/color.service';
import { HomeComponent } from './home/home.component';
import { PmeDetailsComponent } from './pme-details/pme-details.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    CreatePmeComponent,
    HomeComponent,
    PmeDetailsComponent,
    UserSignInComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
