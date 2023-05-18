import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private http :HttpClient) { }

  storeStudentData(formData:any){
    return this.http.post("http://localhost:3000/Students",formData)
  }

  getStudentData(){
    return this.http.get("http://localhost:3000/Students")
  }
  
  deleteStudentData(id:any){
    return this.http.delete("http://localhost:3000/Students/"+id)
  }

  updateData(data:any){
    return this.http.put("http://localhost:3000/Students/"+data.id,data)
  }
}



