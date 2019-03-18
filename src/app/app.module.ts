import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./Home/home.component";
import { RegisterComponent } from "./register/register.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, RegisterComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
