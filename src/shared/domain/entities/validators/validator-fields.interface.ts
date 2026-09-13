export type FieldsErros = {
  [field: string]: string[]
}

export interface ValidatorFieldInterface<PropsValidated> {
  erros: FieldsErros
  validatedData: PropsValidated
  validate(data: any): boolean
}
