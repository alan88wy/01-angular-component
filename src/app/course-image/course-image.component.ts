import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course'

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css']
})
export class CourseImageComponent implements OnInit {

  @Input('src')
  imageUrl: string;

  // @Input()
  // description: string;

  constructor() { }

  ngOnInit() {}
}
