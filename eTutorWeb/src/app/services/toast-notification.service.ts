import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {

  constructor(private toastService: ToastrService) { }

  showSucessMessage(title: string, description: string) {
    this.toastService.success(description, title);
  }

  showErrorMessage(title: string, content: string) {
    this.toastService.error(content, title);
  }

  showError(title: string, error: any) {
    if (error.error === undefined) {
      const message = error.message !== undefined ? error.message : error;
      this.toastService.error(message, title);
    } else {
      const message = error.error.message !== undefined ? error.error.message : error.error;
      this.toastService.error(message, title);
    }

  }

  showWarningMessage(title: string, description: string) {
    this.toastService.warning(description, title);
  }

}
