import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SimpleUserResponse} from '../../models/SimpleUserResponse';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DominicanVerificationDigitValidator} from '../../shared/functions/dominican-verification-digit';
import {UserRegistrationService} from '../../services/accounts/user-registration.service';
import {ToastNotificationService} from '../../services/toast-notification.service';
import {Subscription} from 'rxjs';
import {ParentUserRegistrationRequest} from '../../models/parent-user-registration-request';
import {UsersService} from '../../services/accounts/users.service';


@Component({
  selector: 'app-parent-registration-form',
  templateUrl: './parent-registration-form.component.html',
  styleUrls: ['./parent-registration-form.component.scss']
})
export class ParentRegistrationFormComponent implements OnInit, OnDestroy {

  student: SimpleUserResponse = {id: 0, name: '', lastName: '', email: ''};
  studentId = 0;
  registrationForm: FormGroup;
  passwordsMatch = true;
  isLoading = false;
  parentEmail = '';
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private registrationService: UserRegistrationService,
    private toastNotificationService: ToastNotificationService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.preLoadData().catch(err => {
      console.log(err);
      this.toastNotificationService.showError('Error', err);
    });
  }

  submitForm() {
    this.registerUser().catch(error => {
      this.toastNotificationService.showError('Error', 'Ha ocurrido un error tratando de efectuar el registro');
      this.isLoading = false;
    });
  }

  private async registerUser() {
    this.isLoading = true;

    if (this.studentId === 0) {
      this.toastNotificationService.showWarningMessage('Problema', 'No se puede continuar sin el ID valido de un usuario');
      this.isLoading = false;
      return;
    }

    if (this.registrationForm.invalid && !this.passwordsMatch) {
      this.isLoading = false;
      return;
    }
    const value: ParentUserRegistrationRequest = this.registrationForm.value;
    value.userName = value.email;
    value.studentId = this.studentId;
    await this.registrationService.RegisterParentUser(value);
    this.isLoading = false;
  }

  private async preLoadData() {
    this.getRouteParams();
  }

  private getRouteParams() {
    this.route.queryParams.subscribe(params => {
      this.studentId = params.student;
      this.parentEmail = params.email;
      this.email.patchValue(this.parentEmail);
      this.getUserInformation().catch(err => {
        console.log(err);
        this.toastNotificationService.showError('Error', err);
      });
    });
  }

  private async getUserInformation() {
    if (this.studentId === undefined || this.studentId === 0) {
      return;
    }
    this.isLoading = true;
    this.student = await this.usersService.getUserDetails(this.studentId);
    this.isLoading = false;
  }

  private buildForm() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: [1, Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required]],
      personalId: ['', [Validators.required, DominicanVerificationDigitValidator]],
      userName: [''],
      studentId: ['0']
    });
    this.email.disable();
    this.onValueChanges();
  }

  private onValueChanges() {
    const confPassSubs = this.confirmPassword.valueChanges.subscribe(value => {
      this.checkIfPasswordsMatch();
    });

    const passSub = this.password.valueChanges.subscribe(value => {
      this.checkIfPasswordsMatch();
    });

    this.subscriptions.push(confPassSubs, passSub);
  }

  private checkIfPasswordsMatch() {
    const pass: string = this.password.value;
    const conf: string = this.confirmPassword.value;
    this.passwordsMatch = pass === conf;
  }

  get name() {
    return this.registrationForm.get('name');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get gender() {
    return this.registrationForm.get('gender');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get birthDate() {
    return this.registrationForm.get('birthDate');
  }

  get personalId() {
    return this.registrationForm.get('personalId');
  }

  checkIfControlHasErrors(control: AbstractControl) {
    if (control.invalid && (control.touched || control.dirty)) {
      return true;
    }
    return false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
