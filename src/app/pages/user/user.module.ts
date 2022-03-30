import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';
import { AutocompleteComponent } from 'src/app/components/autocomplete/autocomplete.component';


@NgModule({
  declarations: [
    UserComponent,
    DropdownComponent,
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class UserModule { }
