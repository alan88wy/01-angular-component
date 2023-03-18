import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course'
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent {

// Because the ViewCHild is not available at up time, we need to use AfterViewInit Lifecycle hook
export class AppComponent implements AfterViewInit {


  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];

  Courses = COURSES;
  cardIndex: number;

  // ViewChildren - to get multiple child elements
  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<CourseCardComponent>;

  // local template query
  // ViewChild is restricted to the current template component - app-component.html.
  // Cannot query the child component - card-component.html
  // Only for a single element

  // To get the card
  // @ViewChild('cardRef')
  // card: CourseCardComponent;

  // To get reference to html element, we do this:
  // @ViewChild('cardRef')
  // To get list of ElementRef instead
  @ViewChild('cardRef', {read: ElementRef})
  cardRef: ElementRef;

  @ViewChild('container')
  containerDIV: ElementRef;

  constructor() { }

  // AfterViewInit Lifecycle hook
  // DO not modify the data here
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    // console.log(this.containerDIV.nativeElement);
    // console.log(this.cards);

    this.cards.changes.subscribe((cards) => {
      console.log(cards);
    });

  }


  //

  onCourseSelected(course: Course) {
    // v1
    // alert("Course Selected : " + JSON.stringify(course));

    // v2
    // alert("Course Selected : " + JSON.stringify(this.card.course));
    // console.log(this.card.course)

    //  v3
    console.log(this.containerDIV.nativeElement);
    console.log(this.cardRef);



  }

  onCoursesEdit() {
    this.Courses.push(
      {
        id: 11,
        description: "Angular for Beginners 11",
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        longDescription: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
        category: 'BEGINNER',
        lessonsCount: 10
    }

    )
  }


}
