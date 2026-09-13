import { validateSync } from 'class-validator'
import {
  FieldsErros,
  ValidatorFieldInterface,
} from './validator-fields.interface.js'

export abstract class ClassValidatorFields<
  PropsValidated,
> implements ValidatorFieldInterface<PropsValidated> {
  errors: FieldsErros = {}
  validatedData: PropsValidated = {} as PropsValidated
  validate(data: any): boolean {
    const errors = validateSync(data)
    if (errors.length) {
      this.errors = {}
      for (const error of errors) {
        const field = error.property
        if (error.constraints) {
          this.errors[field] = Object.values(error.constraints)
        }
      }
    } else {
      this.validatedData = data
    }
    return !errors.length
  }
}
