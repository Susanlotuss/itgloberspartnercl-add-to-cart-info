import React from 'react'

const Totalizers = ({ total, items, price }: any) => {
  // eslint-disable-next-line no-console
  console.log('los valores recibidos son', total, price)

  return (
    <div>
      <p>Tenemos {items.length} items en tu compra</p>
      <p>Total: ${total?.price / 100}</p>
    </div>
  )
}

export default Totalizers
