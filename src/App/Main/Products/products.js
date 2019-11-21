const products = [
    {
        id:1,
        name:"iPhone 11",
        description:"This is iPhone 11",
        capacity:64,
        type:"phone",
        price:500,
        image:"/images/ipad.png"
    },
    {
        id:2,
        name:"iPhone X",
        description:"This is iPhone X",
        capacity:256,
        type:"phone",
        price:1500,
        image:"/images/iphone.png"
    },
    {
        id:3,
        name:"iPhone XS",
        description:"This is iPhone XS",
        capacity:128,
        type:"phone",
        price:1000,
        image:"/images/ipad.png"
    },
    {
        id:4,
        name:"iPhone 8",
        description:"This is iPhone 8",
        capacity:64,
        type:"phone",
        price:500,
        image:"/images/iphone.png"
    },
]

export const getProductsMap = (array) => {
    return array.reduce((map,product)=>({
        ...map,
        [product.id]:product,
    }),{})
    
}

export default products
