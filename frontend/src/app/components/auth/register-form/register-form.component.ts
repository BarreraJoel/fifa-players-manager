import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, NonNullableFormBuilder } from '@angular/forms';
import { ZardCardComponent } from '@/shared/components/card/card.component';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardInputDirective } from '@/shared/components/input/input.directive';
import { ZardFormImports } from '@/shared/components/form/form.imports';
import { generateId } from '@/shared/utils/merge-classes';
import { Validator } from '@/utils/validators';
import { toast } from 'ngx-sonner';
import { ZardToastComponent } from '@/shared/components/toast/toast.component';
import { AuthService } from '@/services/api/auth/auth.service';
import { ApiFieldError } from '@/interfaces/api';
import { Router } from '@angular/router';

type RegisterForm = {
  full_name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  password_confirmation: FormControl<string>;
};

@Component({
  selector: 'register-form',
  imports: [
    ZardCardComponent,
    ZardButtonComponent,
    ZardInputDirective,
    ZardFormImports,
    ZardToastComponent,
    ReactiveFormsModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {

  protected readonly idFullName = generateId('fullName');
  protected readonly idEmail = generateId('email');
  protected readonly idPassword = generateId('password');
  protected readonly idPasswordConfirm = generateId('passwordConfirm');
  protected isSubmitting = signal(false);
  protected frm!: FormGroup<RegisterForm>;
  private frmInitialValue: object;
  private authService: AuthService = inject(AuthService);

  constructor(private fb: NonNullableFormBuilder, private router: Router) {
    this.frm = this.fb.group({
      full_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(60), Validator.strongPassword()]],
      'password_confirmation': ['', [Validators.required, Validators.minLength(8), Validators.maxLength(60), Validator.equals('password', 'password_confirmation')]],
    });
    this.frmInitialValue = this.frm.getRawValue();
  }

  private redirect() {
    this.router.navigateByUrl("/dashboard");
  }

  protected onSubmit() {
    if (this.frm.invalid) {
      this.frm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    this.register().subscribe(
      res => {
        toast.success('Usuario creado correctamente', {
          description: 'Redireccionando al home ...',
          duration: 3000,
          position: "top-right"
        });

        setTimeout(() => {
          this.redirect();
          this.reset()
        }, 3000);

      },
      errorResponse => {
        this.isSubmitting.set(false);

        if (errorResponse?.error.data?.length) {
          errorResponse.error.data.forEach((errorItem: ApiFieldError) => {
            toast.error(errorResponse.error.message, {
              description: errorItem.msg,
              duration: 2500,
              position: 'top-right',
            });
            const control = this.frm.get(errorItem.path);
            if (control) {
              control.setErrors({
                backend: {
                  message: errorItem.msg
                }
              });
              control.markAsTouched();
            }
          });
        }
      }
    )
  }

  private register() {
    return this.authService.register({
      full_name: this.fullNameControl.value,
      email: this.emailControl.value,
      password: this.password.value,
      password_confirmation: this.passwordConfirmation.value
    });
  }

  protected get fullNameControl() {
    return this.frm.get('full_name')!;
  }
  protected get emailControl() {
    return this.frm.get('email')!;
  }
  protected get password() {
    return this.frm.get('password')!;
  }
  protected get passwordConfirmation() {
    return this.frm.get('password_confirmation')!;
  }

  protected isFieldInvalid(formControl: string): boolean {
    if (this.frm.get(formControl)?.errors)
      return true;
    return false;
  }

  protected getErrorMessage(formControl: string): string {
    const control = this.frm.get(formControl);
    return Validator.getErrorMessage(control);
  }

  protected reset() {
    this.frm.reset(this.frmInitialValue);
    this.isSubmitting.set(false);
  }

}
