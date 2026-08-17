import React from 'react'
import { useParams } from 'react-router';

function ProductsDeatil() {
    const { categoriId, productsId}=useParams()

  return (
    <div>
        <p> categori: {categoriId}</p>
        <p> products: {productsId}</p>

    </div>
  )
}

export default ProductsDeatil;