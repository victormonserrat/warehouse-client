import { Field, Formik } from 'formik'
import Image from 'next/image'

import Button from '~/infrastructure/components/Button'
import Input from '~/infrastructure/components/Input'
import { BodyLarge, BodySmall, H1 } from '~/infrastructure/components/Text'

import Loading from '../../layout/Loading'
import { initialValues, validationSchema } from './constants'
import { useInventoryList } from './hooks'
import { Container, Form, ImageContainer, Item, List, Stock } from './styles'

const InventoryList = () => {
  const { error, handleSellItem, isLoading, items } = useInventoryList()

  if (isLoading) return <Loading />
  if (!items) throw error

  return (
    <Container>
      <H1>Inventory</H1>
      <List>
        {items.map((item) => {
          const schema = validationSchema({ quantity: { max: item.stock } })

          return (
            <Item key={item.id}>
              <ImageContainer>
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  src={`https://picsum.photos/800/400?random=${item.id}`}
                />
              </ImageContainer>
              <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={handleSellItem(item)}
                validateOnBlur={false}
                validateOnMount
                validationSchema={schema}
              >
                {({ errors, isValid }) => (
                  <Form noValidate validationSchema={schema}>
                    <BodyLarge>{item.name}</BodyLarge>
                    <BodySmall>
                      {item.parts
                        .map(
                          (part) => `${part.article.name} (${part.quantity})`,
                        )
                        .join(', ')}
                    </BodySmall>
                    <Field
                      aria-invalid={!!errors.quantity}
                      as={Input}
                      disabled={item.stock < 1}
                      max={item.stock}
                      min={1}
                      name="quantity"
                      required
                      type="number"
                    />
                    <Button disabled={!isValid} type="submit">
                      Sell
                    </Button>
                    <Stock>
                      {item.stock > 0
                        ? `${item.stock} in stock`
                        : 'Out of stock'}
                    </Stock>
                  </Form>
                )}
              </Formik>
            </Item>
          )
        })}
      </List>
    </Container>
  )
}

export default InventoryList
