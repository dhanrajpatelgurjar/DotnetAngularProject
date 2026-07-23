import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import ServivesService from 'src/app/servives.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {
  studentData: any;
  updatestd: any=FormGroup;
  constructor( private service : ServivesService,private router : Router ) { }

  ngOnInit(): void {
        this.studentData = this.service.student; 
        this.service.student = undefined;
        console.log(this.studentData);

        this.updatestd = new FormGroup({
          id : new FormControl(this.studentData.id),
          name: new FormControl(this.studentData.name),
          date: new FormControl(this.studentData.date),
          complete: new FormControl(this.studentData.complete),
        })
  }

  update()
  {
    this.service.editstudent(this.updatestd.value).subscribe(res => {
      this.router.navigate(['Student']);
    })
  }
}
