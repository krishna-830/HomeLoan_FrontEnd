import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  constructor(public fb:FormBuilder,public ser:CommonService,private r:Router,private route :ActivatedRoute) { }

enquiryForm:FormGroup
submitted = false;

  ngOnInit(): void {
    this.enquiryForm=this.fb.group({  
      custId:[this.ser.enqiry.eId,[Validators.required]],    
      name:[this.ser.enqiry.name,[Validators.required]],
      age:[this.ser.enqiry.age,[Validators.required]],
      dob:[this.ser.enqiry.dob,[Validators.required]],
      mbNo:[this.ser.enqiry.mbNo,[Validators.required]],
      pancardNo:[this.ser.enqiry.pancardNo,[Validators.required]],
      emailId:[this.ser.enqiry.emailId,[Validators.required]],
      addharCard:[this.ser.enqiry.addharCard,[Validators.required]],
      gender:[this.ser.enqiry.gender,[Validators.required]]
   
    })    
  }

  onSave(){   
      console.log(this.enquiryForm.value)
      this.ser.createEnquiry(this.enquiryForm.value).subscribe();
      this.submitted = true;
      this.ngOnInit()
     // this.r.navigate(["../air-india-flights"],   {relativeTo: this.route})
      //this.ser.bus=this.regform.value  
    } 


    
}