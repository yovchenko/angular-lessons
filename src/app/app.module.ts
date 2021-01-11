import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FirstComponent } from "../first/first.component";
import { SecondComponent } from "../second/second.component";
import { ChildAComponent } from "../child-a/child-a.component";
import { UserService } from "../user.service";
import { UserGuard } from "../user.guard";
import { ThirdComponent } from "../third/third.component";

const ROUTES = [
  {
    path: "first",
    component: FirstComponent,
    children: [
      {
        path: "child/:id", // child route path
        component: ChildAComponent,
        canActivate: [UserGuard]
      }
    ]
  },
  { path: "second", component: SecondComponent },
  { path: "third", component: ThirdComponent },
  { path: "", redirectTo: "/first", pathMatch: "full" } // redirect to `first-component`
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ChildAComponent
  ],
  providers: [UserService, UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
