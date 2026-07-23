import { Component,Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import ServivesService from 'src/app/servives.service';
import {ActivatedRoute, Router} from '@angular/router'
import { StudentComponent } from '../student/student.component';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudent!: FormGroup;
  studentData: any;


  constructor(private service: ServivesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  async ngOnInit(): Promise<void> {
    // this.studentData = this.service.student; 
    // this.service.student = undefined;
    // console.log(this.studentData);
    
    this.addStudent = new FormGroup({
      Name: new FormControl(''),
      Complete: new FormControl(false),
      Date: new FormControl(''),
    });

    // this.activatedRoute.queryParams.subscribe(params => {
    //   if (params) {
    //     this.studentId = params['studentId'];
    //   }
    // });
    // // console.log(this.studentId);

    // this.GetStudentById(this.studentId);
  }


 
 saveStudent() {

      this.service.addStudent(this.addStudent.value).subscribe(respose => { 
        console.log(this.addStudent.value);
        
        this.router.navigate(['Student']);
       });
      
    // });
  }

  // GetStudentById(id: any) {
  //   this.service.GetStudentById(id).subscribe((respose) => {
  //     this.studentData = respose;

  //     // this.addStudent.get("Name")?.patchValue(this.studentData.Name);
  //     // this.addStudent.get("Date")?.patchValue(this.studentData.Date);
  //     // this.addStudent.get("Complete")?.patchValue(this.studentData.Complete);
  //   });
  // }
}
