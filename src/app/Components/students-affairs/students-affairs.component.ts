import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students-affairs',
  templateUrl: './students-affairs.component.html',
  styleUrls: ['./students-affairs.component.css'],
})
export class StudentsAffairsComponent {
  constructor(private studentsService: StudentsService) {}
}
