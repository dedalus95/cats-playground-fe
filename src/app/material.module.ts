import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatButton
  ],
  schemas: []
})

export class MaterialModule { }
