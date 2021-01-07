import { Course } from './model/course';
import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

coreCourse = COURSES[0];
rxjsCourse= COURSES[1];
ngrxCourse = COURSES[2];

  onCardClicked(event: Event){
    console.info("App component - click event " + event.target);
  }
  onCourseSelected(course: Course) {
    console.info("App component - custom event " + course.description);
  }
}
