import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export default class ServivesService {
  student: any=[];
  apiUrl = 'https://localhost:44363/Student';
  constructor(private http : HttpClient) { }
  
  
  getStudents()
  {
    return this.http.get(`${this.apiUrl}/GetStudents`);
  }
  
  addStudent(body:any) {
    return this.http.post(`${this.apiUrl}/CreateStudent` , body);
  }

  deleteStudent(Id:any)
  {
    return this.http.delete(`${this.apiUrl}/DeleteStudents/`+Id);
  }

  editstudent(std:any)
  {
    return this.http.put(`${this.apiUrl}/`+ std.id, std);
  }


  GetStudentById(id :any)
  {
    return this.http.get(`${this.apiUrl}/`+id);

  }
}
