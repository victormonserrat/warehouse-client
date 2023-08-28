import { Form as DefaultForm, useFormikContext } from 'formik'
import { ComponentType, useEffect } from 'react'

import { WithOnSchemaChangeValidationProps } from './types'

const withOnSchemaChangeValidation = <Props, Values>(
  Component: ComponentType<Props>,
) => {
  const WithOnSchemaChangeValidation = ({
    validationSchema,
    ...props
  }: WithOnSchemaChangeValidationProps<Props, Values>) => {
    const { validateForm } = useFormikContext()

    useEffect(() => {
      validateForm()
    }, [validateForm, validationSchema])

    return (
      <Component
        {...(props as WithOnSchemaChangeValidationProps<Props, Values>)}
      />
    )
  }

  return WithOnSchemaChangeValidation
}

export default withOnSchemaChangeValidation

export const Form = withOnSchemaChangeValidation(DefaultForm)
