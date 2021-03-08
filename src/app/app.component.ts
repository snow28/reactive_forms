import { Component } from '@angular/core';
import {AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: []
})
export class AppComponent {
  title = 'kachailo-software';
  locations: string[] = ['Downtown', 'S. County', 'Lakeside'];
  myForm: any;

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  globalFormValidator(): ValidatorFn { // null if everything valid
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      return { name: false }; // name and value
    };
  }

  phoneValidator(): ValidatorFn { // null if everything valid
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if ( control.value.length > 5 ) {
        return null;
      } else {
        return {wrongNumber: control.value};
      }
    };
  }

  initializeForm(): void{
    /*this.myForm = new FormGroup({
      name: new FormControl('Your Name' , [this.validator()])
    });*/
    this.myForm = this.fb.group({
      name: 'Dmytro',
      phoneNumber: ['' , [this.phoneValidator()]],
      preferredLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false
      }),
      references: this.fb.array([this.fb.control('')])
    }, { validators: [] }); // global validator
  }

  get references(): FormArray {
    return this.myForm.get('references') as FormArray;
  }

  selectLocation( event: any ): void {
    this.myForm.patchValue({
      preferredLocation: event.target.value
    });
  }

  removeEmail( index: number ): void {
    this.references.removeAt(index);
  }

  addEmail(): void {
    this.references.push(this.fb.control(''));
  }

  onSubmit(): void {
    console.log(this.myForm);
  }

}
