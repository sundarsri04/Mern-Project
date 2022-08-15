import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Sundar",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Sri",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: "1",
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/briyani.webp",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      //_id: "2",
      name: "Adidas Fit Shirt",
      slug: "adidas-fit-shirt",
      category: "Shirts",
      image: "/images/p2.jpeg",
      price: 250,
      countInStock: 0,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      //_id: "3",
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pant",
      image: "/images/p3.jpeg   ",
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      //_id: "4",
      name: "Adidas Fit Pant",
      slug: "adidas-fit-pant",
      category: "Pant",
      image: "/images/p4.jpeg   ",
      price: 65,
      countInStock: 5,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],

  
};

export default data;
