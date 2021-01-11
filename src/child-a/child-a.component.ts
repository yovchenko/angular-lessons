import { Component, OnDestroy,  OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: "app-child-a",
  templateUrl: "./child-a.component.html",
  styleUrls: ["./child-a.component.css"]
})
export class ChildAComponent implements OnInit, OnDestroy {
  user: User;
  id: number;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.getUser(this.id);
    });
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
