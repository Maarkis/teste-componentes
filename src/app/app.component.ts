import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-component';

  constructor(private fb: FormBuilder) {
  }

  maximoCaracteres: number = 10

  form = this.fb.group({
    quantidade1: new FormControl({ value: 1, disabled: false }, {
      validators: [
        Validators.required,
        Validators.max(3),
        Validators.min(1)
      ]
    }),
    quantidade2: new FormControl({ value: 0, disabled: false }, {
      validators: [
        Validators.required,
        Validators.max(10),
        Validators.min(0)
      ]
    }),
    quantidade3: new FormControl({ value: 1, disabled: true }, {
      validators: [
        Validators.required,
      ]
    }),
    meuTexto: new FormControl({ value: 'Meu texto', disabled: false },
      {
        nonNullable: false,
        validators: [
          Validators.maxLength(this.maximoCaracteres),
          Validators.minLength(0)
        ]
      })
  });

  log(): void {
    console.log(this.form)
  }

  habilitarDesabilitarEntradaTexto(): void {
    const meuTexto = this.form.controls.meuTexto
    if (meuTexto.disabled) {
      meuTexto.enable()
      return
    }
    meuTexto.disable()
  }

  alterarQuantidadeDeCaracteres(): void {
    this.maximoCaracteres = 50
    const meuTexto = this.form.controls.meuTexto
    meuTexto.setValidators(Validators.maxLength(this.maximoCaracteres))
    meuTexto.updateValueAndValidity()
  }
}
