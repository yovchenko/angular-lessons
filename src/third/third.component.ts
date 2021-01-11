import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-third",
  templateUrl: "./third.component.html",
  styleUrls: ["./third.component.css"]
})
export class ThirdComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  description: string = "";
  name: string = "";
  titleAlert: string = "This field is required!";

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      name: [null, Validators.required],
      description: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(250)
        ])
      ],
      validate: ""
    });
  }

  ngOnInit() {}

  addPost(post: { description: string; name: string }) {
    this.description = post.description;
    this.name = post.name;
    console.log(post.name);
  }
}
