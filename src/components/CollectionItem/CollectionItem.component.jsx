import React, {useState} from 'react';

import { 
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer } from './CollectionItem.styles';

const CollectionItem = () => {
    const [cart, setCart] = useState([])

    const [products] = useState([
        { Name: "Cheese", price : 2.50, Location: "Refrigerated foods", qty: 2,
            imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7gFJrqPKaDRw7SnYZb63WkZEDyTPUCci1Q&usqp=CAU"},
        { Name: "Crisps", price : 3, Location: "the Snack isle", qty: 5,
        imageUrl: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_600,h_600/https://manhattan.ie/wp-content/uploads/2018/05/cheese-onion-crisps-buy-online-150g-manhattan-crisps1-600x600.jpg"},
        { Name: "pizza", price : 4, Location: "Refrigerated foods", qty: 7,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUzl7V0jxjDi1rOZ1fdCjcsmgckulmC8vPCKxEOdVlGREGr_IfUfjX10ukiPFXF2YNjs&usqp=CAU" },
        { Name: "Chocolate", price : 1.50, Location: "the Snack isle", qty: 8,
        imageUrl: "https://www.whittakers.co.nz/assets/Uploads/Products/Product/block-darkblock-250g-v2.png"},
        { Name: "Self-raising flour", price : 1.50, Location: "Home baking", qty: 0,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81xl94TdKoL._SL1500_.jpg" },
        { Name: "Ground almonds", price : 3, Location: "Home baking", qty: 1,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51S4zpN7SYL._SX425_.jpg"}
        
    ])

    const AddToCart = (product) => {
        console.log("added")
        setCart([...cart, product])
    }
    
    return (
        <>
        <button>Cart: ({cart.length})</button>
    <CollectionItemContainer>
        
        <BackgroundImage>{products.imageUrl}</BackgroundImage>
            <CollectionFooterContainer>
                <NameContainer>{products.Name}</NameContainer>
                <PriceContainer>{products.price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => AddToCart(products)} >ADD TO CART</AddButton>
    </CollectionItemContainer>
    </>
)};

export default CollectionItem;