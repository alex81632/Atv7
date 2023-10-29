// form.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData: any = {};

  constructor(private router: Router, private dataService: DataService) {}

  onSubmit() {
    this.dataService.saveData(this.formData).subscribe(
      response => {
        console.log(response);
        // Alerta de sucesso
        alert(response.message);
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
      }
    );
  }
}
