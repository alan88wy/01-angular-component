import { Component, Input, EventEmitter, OnInit, Output, ContentChild, AfterViewInit, ElementRef, ContentChildren, AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import { Course } from '../model/course'
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Output()
  courseSelected: EventEmitter<Course> = new EventEmitter<Course>();

  // Template Query

  // Content Child Decorator. Restrict to the content of the component instance.
  // That is query the content inside <course-card></course-card> only

  // @ContentChild('cImage')
  // @ContentChild(CourseImageComponent, {read: ElementRef})
  // image: ElementRef;

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<CourseImageComponent>;

  constructor() {}

  ngAfterContentInit(): void {
    console.log(this.images);
  }

  ngAfterViewInit(): void {
      // console.log(this.images);
  }

  ngOnInit() {}

  onCourseView() {
    // alert("Click to view Course")
    // console.log("Course Selected: " + JSON.stringify(this.course));

    this.courseSelected.emit(this.course);
  }

  // We use this to add/remove classes from the card
  cardClasses() {
    if  (this.course.category === 'BEGINNER') {
     return 'beginner'
    } else if  (this.course.category === 'INTERMEDIATE') {
      return 'intermediate'
    } if  (this.course.category === 'ADVANCED') {
      return 'advanced'
    }
  }

  // We use this to add/change style
  cardStyle() {
    return {'text-decoration': 'underline'};
  }

}
