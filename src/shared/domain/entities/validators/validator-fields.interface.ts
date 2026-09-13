export type FieldsErros = {
  [field: string]: string[]
}

export interface ValidatorFieldInterface<PropsValidated> {
  errors: FieldsErros
  validatedData: PropsValidated
  validate(data: any): boolean
}
