import { Course } from './model/course';
import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  startDate: Date = new Date(2020, 0, 1)

  title = COURSES[1].description;

  price = COURSES[1].price;

  rate = COURSES[1].rate;

  course = COURSES[1];
  
  onCourseSelected(course: Course) {
    console.info("App component - custom event " + course.description);
  }
}
