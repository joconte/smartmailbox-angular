import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule} from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { BoiteAuLettreListComponent } from './components/boite-au-lettre-list/boite-au-lettre-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CourrierComponent } from './components/courrier/courrier.component';
import { BoiteAuLettreComponent } from './components/boite-au-lettre/boite-au-lettre.component';

const routes: Routes = [ 
  { path: 'login', component: LoginComponent},
  { path: 'userDetails', component: UserDetailsComponent},
  { path: 'boiteAuLettres', component: BoiteAuLettreListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDetailsComponent,
    BoiteAuLettreListComponent,
    BoiteAuLettreComponent,
    NavigationComponent,
    CourrierComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
