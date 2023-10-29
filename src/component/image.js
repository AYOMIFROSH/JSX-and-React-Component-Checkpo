import React from "react";
import Product from "../product";

const Image = () => {
    return (
        <img src={Product.imagePic} alt={Product.name} />
    )
};

export default Image;