import React from "react";
import PPhoto from "./asset/DanoLogo.jpg"
{/* here is the product details */}
const Product = {
    name: 'Dano Milk',
    price: <button className="button">$50.00</button>,
    description: `A skimmed milk infused with vegetable fat popular in Bangladesh,
                Can be enjoyed hot or cold and provides energy and nourishment at any time of the day,
            Dano Full Cream Powder Milk,
            "Made from fresh cow milk through a high-temperature spray dry process, designed to meet the nutritional needs of today's children and families. 
            It's a rich source of essential energy and nutrition`,
    imagePic :<img src={PPhoto} />
}; 

export default Product;