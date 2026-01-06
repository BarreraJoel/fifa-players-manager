import { Component, inject, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, NonNullableFormBuilder, FormControl } from '@angular/forms';
import { ZardCardComponent } from '@/shared/components/card/card.component';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardInputDirective } from '@/shared/components/input/input.directive';
import { ZardFormImports } from '@/shared/components/form/form.imports';
import { generateId } from '@/shared/utils/merge-classes';
import { Validator } from '@/utils/validators';
import { toast } from 'ngx-sonner';
import { ZardToastComponent } from '@/shared/components/toast/toast.component';
import { AuthService } from '@/services/api/auth/auth.service';
import { ApiError, ApiFieldError } from '@/interfaces/api';
import { Router } from '@angular/router';
import { LoginDto } from '@/interfaces/auth';

type LoginForm = {
  email: FormControl<string>;
  password: FormControl<string>;
};

@Component({
  selector: 'login-form',
  imports: [
    ZardCardComponent,
    ZardButtonComponent,
    ZardInputDirective,
    ZardFormImports,
    ZardToastComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  protected readonly idEmail = generateId('email');
  protected readonly idPassword = generateId('password');
  protected readonly idPasswordConfirm = generateId('passwordConfirm');
  protected isSubmitting = signal(false);
  protected frm!: FormGroup<LoginForm>;
  private frmInitialValue: object;
  private authService: AuthService = inject(AuthService);

  constructor(private fb: NonNullableFormBuilder, private router: Router) {
    this.frm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(60)]],
    });
    this.frmInitialValue = this.frm.getRawValue();
  }

  protected redirect(route: string) {
    this.router.navigateByUrl(route);
  }

  protected onSubmit() {
    if (this.frm.invalid) {
      this.frm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    this.login().subscribe(
      res => {
        toast.success('Inicio de sesión exitoso', {
          description: 'Redireccionando al home ...',
          duration: 3000,
          position: "top-right"
        });

        setTimeout(() => {
          this.redirect('/dashboard');
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
        else {
          toast.error("Error al iniciar sesión", {
            description: errorResponse.error.message,
            duration: 2500,
            position: 'top-right',
          });
        }
      }
    )
  }

  private login() {
    return this.authService.login({
      email: this.emailControl.value,
      password: this.password.value,
    });
  }

  protected get emailControl() {
    return this.frm.get('email')!;
  }
  protected get password() {
    return this.frm.get('password')!;
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
