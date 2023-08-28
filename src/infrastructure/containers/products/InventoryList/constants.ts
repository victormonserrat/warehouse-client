import * as Yup from 'yup'

export const initialValues = { quantity: 1 }

export const validationSchema = ({ quantity }: { quantity: { max: number } }) =>
  Yup.object().shape({
    quantity: Yup.number().integer().max(quantity.max).min(1).required(),
  })
