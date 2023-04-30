import { Component, Input, OnInit, Renderer2, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'escolha-quantidade',
  templateUrl: './escolha-quantidade.component.html',
  styleUrls: ['./escolha-quantidade.component.css'],
  /// Necessário para injeção, caso não use o NgControl
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   multi: true,
    //   useExisting: EscolhaQuantidadeComponent
    // },
    // {
    //   provide: NG_VALIDATORS,
    //   multi: true,
    //   useExisting: EscolhaQuantidadeComponent
    // }
  ]
})
export class EscolhaQuantidadeComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() incremento: number = 0;
  quantidade: number = 0;
  desabilitado: boolean = false;
  habilitado: boolean = !this.desabilitado
  tocado: boolean = false;

  aoMudar: Function = (quantidade: number): void => { }
  aoTocar: Function = (): void => { }

  // Ainda não entendi o Self(), tem que estudar sobre :) retirei o @Self() e funcionou mas no tutorial tinha ele. 
  constructor(@Self() private _controleDiretiva: NgControl) {
    // faz a injeção e com ele temos o controle do FormControl
    // Ex. this.controleDiretiva.pristine
    _controleDiretiva.valueAccessor = this;
    _controleDiretiva.pristine
  }

  ngOnInit(): void {
  }

  aoAdicionar(): void {
    this.marcarComoTocado()
    if (this.habilitado) {
      this.quantidade += this.incremento
      this.aoMudar(this.quantidade)
    }
  }

  aoRemover(): void {
    this.marcarComoTocado()
    if (this.habilitado) {
      this.quantidade -= this.incremento
      this.aoMudar(this.quantidade)
    }
  }

  writeValue(quantidade: number): void {
    this.quantidade = quantidade
  }

  registerOnChange(funcao: Function): void {
    this.aoMudar = funcao
  }

  registerOnTouched(funcao: Function): void {
    this.aoTocar = funcao
  }

  setDisabledState?(estaDesabilitado: boolean): void {
    this.desabilitado = estaDesabilitado
  }

  marcarComoTocado(): void {
    const aoTocar: Function = this.aoTocar;
    if (!aoTocar && typeof aoTocar === 'function') {
      this.aoTocar()
      this.tocado = true
    }
  }

  // Vem da interface Validator para fazer validações customizada, não sei se é necessário :) 
  validate(control: AbstractControl<number, number>): ValidationErrors | null {
    return null
  }
  // Vem da interface Validator para fazer validações customizada 
  registerOnValidatorChange?(fn: () => void): void {
  }

  get temErro(): boolean {
    return this._controleDiretiva.invalid ?? false;
  }
}
