import React from 'react'
// import { useProduct } from 'vtex.product-context';
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'

import ButtonGroup from './ButtonGroup'
import Totalizers from './Totalizers'
import ProductGroup from './ProductGroup'
import styles from './styles.css'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  // const productInfo = useProduct();
  const {
    orderForm: { items, totalizers, value },
  } = useOrderForm()

  // eslint-disable-next-line no-console
  console.log(
    'este es mi totalizer',
    totalizers[0],
    'Esta es mi info de mi orden',
    {
      orderForm: { value },
    }
  )

  const container = generateBlockClass(styles.container, blockClass)

  return (
    <div className={container}>
      <ProductGroup products={items} blockClass={blockClass} />
      <Totalizers total={totalizers[0]} items={items} price={value} />
      <ButtonGroup blockClass={blockClass} />
    </div>
  )
}

export default AddToCartInfo
