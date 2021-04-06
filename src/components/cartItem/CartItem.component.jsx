import React from 'react';

import { CartItemContainer, CartItemImage, CartItemDetailContainer} from  './cart-item.styles';

const CartItem = ({ products : {imageUrl, Name, price, Location, qty}}) => (
    <CartItemContainer>
        <CartItemImage src={ imageUrl } alt='item' />
        <CartItemDetailContainer>
            <span className='name'>{ Name }</span><br/>
            <span className='price'>
                { qty } x  ${ price }
            </span>
        </CartItemDetailContainer>
    </CartItemContainer>
);

export default CartItem;