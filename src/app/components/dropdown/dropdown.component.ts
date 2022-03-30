import { Component, Input, OnInit } from '@angular/core';
import { DataDropDown } from '../../models/dataDropDown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() data?: DataDropDown;

  constructor() { }

  ngOnInit(): void {
  }

}
