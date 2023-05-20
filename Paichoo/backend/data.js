import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Kshitiz",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jigyasa",
      email: "nan@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: "1",
      name: "Mantra M1",
      slug: "mantra-guitar",
      category: "Music",
      image: "/images/mantra.jpg",
      price: 217,
      countInStock: 10,
      brand: "Mantra",
      rating: 4.5,
      numReviews: 10,
      description: "Good One",
    },
    {
      //_id: "2",
      name: "Signature M1",
      slug: "signature-guitar",
      category: "Music",
      image: "/images/signature.jpg",
      price: 217,
      countInStock: 10,
      brand: "Signature",
      rating: 4.5,
      numReviews: 10,
      description: "Good One",
    },
    {
      //_id: "3",
      name: "Yamaha M1",
      slug: "yamaha-guitar",
      category: "Music",
      image: "/images/yamaha.jpg",
      price: 217,
      countInStock: 10,
      brand: "Yamaha",
      rating: 4.5,
      numReviews: 10,
      description: "Good One",
    },
    {
      // _id: "4",
      name: "Electric Guitar",
      slug: "electric-guitar",
      category: "Music",
      image: "/images/eletric.jpg",
      price: 217,
      countInStock: 0,
      brand: "Yamaha",
      rating: 4.5,
      numReviews: 10,
      description: "Good One",
    },
  ],
};

export default data;
