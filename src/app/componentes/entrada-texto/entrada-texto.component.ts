import { Component, Input, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'entrada-texto',
  templateUrl: './entrada-texto.component.html',
  styleUrls: ['./entrada-texto.component.css']
})
export class EntradaTextoComponent implements ControlValueAccessor, Validator {
  @Input() minimoCaracteres: number = 0
  @Input() maximoCaracteres: number | undefined = undefined
  @Input() dicas: string = ''
  @Input() rotulo: string = ''

  desabilitado: boolean = false

  private _texto: string = '';
  public get texto(): string {
    return this._texto;
  }
  public set texto(texto: string) {
    this._texto = texto;
    this.aoMudar(this.texto);
    this.aoTocar();
  }

  aoMudar: Function = (texto: string): void => { }
  aoTocar: Function = (): void => { }

  constructor(@Self() private _controleDiretiva: NgControl) {
    this._controleDiretiva.valueAccessor = this
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return null
  }
  registerOnValidatorChange?(fn: () => void): void {

  }

  writeValue(texto: string): void {
    this.texto = texto
  }

  registerOnChange(funcao: Function): void {
    this.aoMudar = funcao;
  }

  registerOnTouched(funcao: Function): void {
    this.aoTocar = funcao
  }

  setDisabledState?(estaDesabilitado: boolean): void {
    this.desabilitado = estaDesabilitado
  }

  get temErro(): boolean {
    return this._controleDiretiva.invalid ?? false;
  }
}
