import { FormikConfig } from 'formik'

export type WithOnSchemaChangeValidationProps<Props, Values> = Props &
  Required<Pick<FormikConfig<Values>, 'validationSchema'>>
