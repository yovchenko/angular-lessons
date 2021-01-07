import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;

  @Output('courseSelected')
  courseEmmiter = new EventEmitter<Course>();

  constructor() { }
 
  ngOnInit(): void {
  }

  onCourseViewed(event: Event) {
    event.stopPropagation();
    console.log("card-component - button event " + event.target);
    this.courseEmmiter.emit(this.course);
  }
}
