import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import ServivesService from 'src/app/servives.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList: any = [];
  addStudent: any;

  constructor(private service: ServivesService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.service.getStudents().subscribe(respose => {
      this.studentList = respose;
    });
  }

  redirectAddStudent() {
    this.router.navigate([`Student/AddStudent`]);
  }

  onEdit(std:any): void {
    this.service.student = std;
    this.router.navigate([`Student/Editstudent`]);
}

  Remove(data: any) {
    if (confirm('Are you sure ? ' + data.name)) {
      this.service.deleteStudent(data.id).subscribe(async (respose) => {
        alert("Delete Sucessfull " + data.name);
        this.getStudents();
      })
    }
  }
}