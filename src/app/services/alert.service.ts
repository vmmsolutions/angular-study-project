import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  successMessage: string = 'Sucesso!';
  timer: number = 3000;

  constructor(private _snackBar: MatSnackBar) { }

  success(duration?: number, message?: string) {
    this._snackBar.open(message === undefined ? this.successMessage : message, '', {
      duration: duration === undefined ? this.timer : duration,
      panelClass: ['snackbar-success-class'],
    });
  }

  info(duration?: number, message?: string) {
    this._snackBar.open(message === undefined ? this.successMessage : message, '', {
      duration: duration === undefined ? this.timer : duration,
      panelClass: ['snackbar-info-class'],
    });
  }

  error(duration?: number, message?: string) {
    this._snackBar.open(message === undefined ? this.successMessage : message, '', {
      duration: duration === undefined ? this.timer : duration,
      panelClass: ['snackbar-error-class'],
    
    });
  }

}
