import React from 'react'
import { generateBlockClass } from '@vtex/css-handles'

import styles from './styles.css'

const ButtonGroup = ({ blockClass }: any) => {
  const BUTTON_SHOP = generateBlockClass(styles.BUTTON_SHOP, blockClass)
  const LINK_BUY = generateBlockClass(styles.LINK_BUY, blockClass)
  const CONTAINER_BUY = generateBlockClass(styles.CONTAINER_BUY, blockClass)
  const LINK_HOME = generateBlockClass(styles.LINK_HOME, blockClass)
  const CONTAINER_SHOP = generateBlockClass(styles.CONTAINER_SHOP, blockClass)

  return (
    <>
      <div className={CONTAINER_BUY}>
        <a href="/checkout/#/cart" className={LINK_BUY}>
          Ir a pagar
        </a>
        <a href="/checkout/#/cart" className={LINK_BUY}>
          Ver carrito
        </a>
      </div>
      <div className={CONTAINER_SHOP}>
        <button className={BUTTON_SHOP}>
          <a href="/" className={LINK_HOME}>
            Continúa comprando
          </a>
        </button>
      </div>
    </>
  )
}

export default ButtonGroup
