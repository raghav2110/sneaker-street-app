import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "NMD_R1 - CORE BLACK",
    image:
      "https://res.cloudinary.com/dxsodik0q/image/upload/v1648042630/Sneaker%20Street/new-arrival-1_fxnt2k.jpg",
    rating: 3,
    discountedPrice: 7999,
    originalPrice: 9999,
    deliveryCharge: 50,
    inStock: true,
    avalQty: 10,
    brand: "Nike",
    categoryName: "men",
  },
  {
    _id: uuid(),
    name: "JAPAN S - WHITE INDIGO",
    image:
      "https://res.cloudinary.com/dxsodik0q/image/upload/v1648042630/Sneaker%20Street/new-arrival-2_jaafpk.jpg",
    rating: 3.5,
    discountedPrice: 4499,
    originalPrice: 5999,
    deliveryCharge: 50,
    inStock: true,
    avalQty: 15,
    brand: "Asics",
    categoryName: "men",
  },
  {
    _id: uuid(),
    name: "CLUB C DOUBLE GEO",
    image:
      "https://res.cloudinary.com/dxsodik0q/image/upload/v1648042630/Sneaker%20Street/new-arrival-3_el0wfh.jpg",
    rating: 3.5,
    discountedPrice: 4999,
    originalPrice: 6999,
    deliveryCharge: 50,
    inStock: true,
    avalQty: 15,
    brand: "Reebok",
    categoryName: "women",
  },
  {
    _id: uuid(),
    name: "AIR MAX - SPORT TURQUOISE",
    image:
      "https://res.cloudinary.com/dxsodik0q/image/upload/v1648042631/Sneaker%20Street/new-arrival-4_xmauoc.jpg",
    rating: 4,
    discountedPrice: 7999,
    originalPrice: 8999,
    deliveryCharge: 50,
    inStock: true,
    avalQty: 7,
    brand: "Nike",
    categoryName: "men",
  },
  {
    _id: uuid(),
    name: "WMN’S AIR MAX 90 SE",
    image:
      "https://res.cloudinary.com/dxsodik0q/image/upload/v1648275532/Sneaker%20Street/new-arrival-5_wwhank.jpg",
    rating: 4.5,
    discountedPrice: 7399,
    originalPrice: 8499,
    deliveryCharge: 50,
    inStock: true,
    avalQty: 5,
    brand: "Nike",
    categoryName: "women",
  },
  {
    _id: uuid(),
    name: "AIR MAX 97 SPRUNG",
    image:
      "https://res.cloudinary.com/dxsodik0q/image/upload/v1648275655/Sneaker%20Street/new-arrival-6_brnbft.jpg",
    rating: 4.5,
    discountedPrice: 6399,
    originalPrice: 7499,
    deliveryCharge: 50,
    inStock: true,
    avalQty: 5,
    brand: "Nike",
    categoryName: "women",
  },
  {
    _id: uuid(),
    name: "WMN’S AIR MAX DAWN",
    image:
      "https://res.cloudinary.com/dxsodik0q/image/upload/v1648275714/Sneaker%20Street/new-arrival-7_ycbibh.jpg",
    rating: 4,
    discountedPrice: 7999,
    originalPrice: 9295,
    deliveryCharge: 50,
    inStock: true,
    avalQty: 5,
    brand: "Nike",
    categoryName: "women",
  },
  {
    _id: uuid(),
    name: "NMD_V3 WONDER WHITE",
    image:
      "https://res.cloudinary.com/dxsodik0q/image/upload/v1648275828/Sneaker%20Street/new-arrival-8_p5acob.jpg",
    rating: 4.5,
    discountedPrice: 4399,
    originalPrice: 5999,
    deliveryCharge: 50,
    inStock: true,
    avalQty: 5,
    brand: "Adidas Originals",
    categoryName: "women",
  },
  {
    _id: uuid(),
    name: "JAPAN S WHITE/LIGHT INDIGO",
    image:
      "https://res.cloudinary.com/dxsodik0q/image/upload/v1648275915/Sneaker%20Street/new-arrival-9_nxotze.jpg",
    rating: 3,
    discountedPrice: 3399,
    originalPrice: 4999,
    deliveryCharge: 50,
    inStock: false,
    avalQty: 5,
    brand: "Asics",
    categoryName: "men",
  },
  {
    _id: uuid(),
    name: "NMD_V3 CRYSTAL WHITE",
    image:
      "https://res.cloudinary.com/dxsodik0q/image/upload/v1648275991/Sneaker%20Street/new-arrival-10_nspaez.jpg",
    rating: 2.5,
    discountedPrice: 5499,
    originalPrice: 6999,
    deliveryCharge: 50,
    inStock: true,
    avalQty: 5,
    brand: "Adidas Original",
    categoryName: "men",
  },
];
