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

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmmiter = new EventEmitter<Course>();

  constructor() { }
 
  ngOnInit(): void {
  }

  isImageVisibel() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER')
      return 'beginner'
  }

  cardStyles() {
    return {
      'background': '#FDFEFE',
      'background-size': 'cover'
    }
  }

  onCourseViewed(event: Event) {
    event.stopPropagation();
    console.log("card-component - button event " + event.target);
    this.courseEmmiter.emit(this.course);
  }
}
