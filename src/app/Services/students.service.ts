import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students = [
    { name: 'Moustafa', age: 27, department: 'IT' },
    { name: 'Zain', age: 27, department: 'IS' },
    { name: 'Waliid', age: 27, department: 'CS' },
    { name: 'Fouad', age: 27, department: 'SC' },
  ];

  constructor() {}
}
