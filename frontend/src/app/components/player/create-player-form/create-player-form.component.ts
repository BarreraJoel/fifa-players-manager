import { Component, inject, signal } from '@angular/core';
import { ZardFormFieldComponent, ZardFormControlComponent } from "@/shared/components/form/form.component";
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlayerService } from '@/services/player/player.service';
import { Router } from '@angular/router';
import { Validator } from '@/utils/validators';
import { toast } from 'ngx-sonner';
import { ZardToastComponent } from "@/shared/components/toast/toast.component";
import { ZardSelectItemComponent } from "@/shared/components/select/select-item.component";
import { ZardSelectComponent } from "@/shared/components/select/select.component";
import { ApiFieldError } from '@/interfaces/api';
import { ZardInputDirective } from '@/shared/components/input/input.directive';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
import { ZardCheckboxComponent } from "@/shared/components/checkbox/checkbox.component";
import { CreateEditPlayerForm } from '@/interfaces/player';
import { ZardFormImports } from '@/shared/components/form/form.imports';

@Component({
  selector: 'create-player-form',
  imports: [
    ZardFormFieldComponent,
    ZardButtonComponent,
    ZardFormControlComponent,
    ReactiveFormsModule,
    ZardToastComponent,
    ZardSelectComponent,
    ZardSelectItemComponent,
    ZardInputDirective,
    ZardCheckboxComponent,
    ZardFormImports
  ],
  templateUrl: './create-player-form.component.html',
  styleUrl: './create-player-form.component.css'
})
export class CreatePlayerFormComponent {
  protected isSubmitting = signal(false);
  protected frm!: FormGroup<CreateEditPlayerForm>;
  private frmInitialValue: object;
  private playerService: PlayerService = inject(PlayerService);
  protected readonly positions = [
    { value: "GK", label: "POR" },
    { value: "LWB", label: "CAI" },
    { value: "LB", label: "LI" },
    { value: "CB", label: "DFC" },
    { value: "RB", label: "LD" },
    { value: "RWB", label: "CAD" },
    { value: "CDM", label: "MCD" },
    { value: "CM", label: "MC" },
    { value: "LM", label: "MI" },
    { value: "CAM", label: "MCO" },
    { value: "RM", label: "MD" },
    { value: "LW", label: "EI" },
    { value: "RW", label: "ED" },
    { value: "CF", label: "SD" },
    { value: "ST", label: "DC" },
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.frm = this.fb.group({
      fifa_version: this.fb.control<string | null>(null, [Validators.required]),
      fifa_update: this.fb.control<string | null>(null, [Validators.required,]),
      long_name: this.fb.control<string | null>(null, [Validators.required,]),
      player_face_url: this.fb.control<string | null>(null, [Validators.required]),
      age: this.fb.control<number | null>(null, [Validators.required, Validators.min(1), Validators.max(60)]),
      player_positions: this.fb.control<string[] | null>([], [Validators.required,]),
      overall: this.fb.control<number | null>(null, [Validators.required, Validators.min(1), Validators.max(99)]),
      potential: this.fb.control<number | null>(null, [Validators.required, Validators.min(1), Validators.max(99)]),

      club_name: this.fb.control<string | null>(null),
      nationality_name: this.fb.control<string | null>(null),
      preferred_foot: this.fb.control<string | null>(null),

      pace: this.fb.control<number | null>(null),
      shooting: this.fb.control<number | null>(null),
      passing: this.fb.control<number | null>(null),
      dribbling: this.fb.control<number | null>(null),
      defending: this.fb.control<number | null>(null),
      physic: this.fb.control<number | null>(null)
    });
    this.frmInitialValue = this.frm.getRawValue();
  }

  private formatPositions() {
    const positions = this.getControl('player_positions')?.value as string[];
    
    if (!Array.isArray(positions) || positions.length === 0) {
      return '';
    }

    return positions.join(', ');
  }

  private create() {
    const positionsString = this.formatPositions();

    return this.playerService.createPlayer({
      fifa_version: this.getControl('fifa_version')?.value,
      fifa_update: this.getControl('fifa_update')?.value,
      long_name: this.getControl('long_name')?.value,
      player_face_url: this.getControl('player_face_url')?.value,
      age: this.getControl('age')?.value,
      player_positions: positionsString,
      overall: this.getControl('overall')?.value,
      potential: this.getControl('potential')?.value,

      club_name: this.getControl('club_name')?.value,
      nationality_name: this.getControl('nationality_name')?.value,
      preferred_foot: this.getControl('preferred_foot')?.value,

      pace: this.getControl('pace')?.value,
      shooting: this.getControl('shooting')?.value,
      passing: this.getControl('passing')?.value,
      dribbling: this.getControl('dribbling')?.value,
      defending: this.getControl('defending')?.value,
      physic: this.getControl('physic')?.value,
    });
  }
  
  protected isSelected(position: string): boolean {
    console.log(position);
    return this.getControl("player_positions")?.value.includes(position);
  }

  protected togglePosition(position: string) {
    const control = this.getControl("player_positions");
    const current = control?.value;
    console.log(this.getControl("player_positions")?.value);

    if (current.includes(position)) {
      control?.setValue(current.filter((p: any) => p !== position));
    } else {
      control?.setValue([...current, position]);
    }
    console.log(this.getControl("player_positions")?.value);
    control?.markAsTouched();
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
    this.create().subscribe(
      res => {
        toast.success('Crear jugador', {
          description: 'Se creó el jugador de manera exitosa',
          duration: 3000,
          position: "top-right"
        });

        setTimeout(() => {
          this.redirect('/players');
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
                backend: { message: errorItem.msg }
              });
              control.markAsTouched();
            }
          });
        }
        else {
          toast.error("Error al crear el jugador", {
            description: errorResponse.error.message,
            duration: 2500,
            position: 'top-right',
          });
        }
      }
    )
  }

  protected getControl(controlName: string) {
    return this.frm.get(controlName);
  }

  protected isFieldInvalid(formControl: string): boolean {
    if (this.getControl(formControl)?.errors)
      return true;
    return false;
  }

  protected getErrorMessage(formControl: string): string {
    const control = this.getControl(formControl);
    return Validator.getErrorMessage(control);
  }

  protected reset() {
    this.frm.reset(this.frmInitialValue);
    this.isSubmitting.set(false);
  }
}
