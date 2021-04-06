import React, {useState} from 'react'
import CollectionItem from '../CollectionItem/CollectionItem.component'
import Header from '../Header/Header.component'

import { ProductPreviewContainer,
        PreviewContainer,
        TitleContainer,
        ProductFooter} from './ProductPreview.styles'

import {AddButton} from '../CollectionItem/CollectionItem.styles'

const ProductPreview = ({Name}) => {
    const [cart, setCart] = useState([]);
    const Products = require('../Products/Product-data.json')
    const AddToCart = (product) => {
        console.log("added")
        setCart([...cart, product])
    }
    return (
        <ProductPreviewContainer>
            <Header><button>Cart ({cart.length})</button></Header>
            <TitleContainer> {Name} </TitleContainer>
            <PreviewContainer>
                {
                    Products.products.map( (product)=> (
                        <CollectionItem>
                            <ProductFooter>
                                <h3 key={Name}>{product.Name} <span>{product.price}</span></h3>
                                
                                {/* <div key={Name}><h1>Name: {products.Name}</h1> </div>
                                <div key={Name}>Price:{products.price} </div> */}
                            </ProductFooter>
                            <AddButton onClick={() => AddToCart(Products.products)} >ADD TO CART</AddButton>
                        </CollectionItem>
                    ))
                }
            </PreviewContainer>
        </ProductPreviewContainer>
    )
}

export default ProductPreview;
