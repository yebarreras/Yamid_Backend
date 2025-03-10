import "dotenv/config.js"
import "../../config/database.js"
import User from "../User.js"

const users = [
  {
    name: "Juan Perez",
    email: "juan.perez@example.com",
    password: "password123",
    photo: "https://example.com/photos/juan.jpg",
    rol: 1
  },
  {
    name: "Maria Gomez",
    email: "maria.gomez@example.com",
    password: "password123",
    photo: "https://example.com/photos/maria.jpg",
    rol: 2
  },
  {
    name: "Carlos Sanchez",
    email: "carlos.sanchez@example.com",
    password: "password123",
    photo: "https://example.com/photos/carlos.jpg",
    rol: 1
  },
  {
    name: "Ana Martinez",
    email: "ana.martinez@example.com",
    password: "password123",
    photo: "https://example.com/photos/ana.jpg",
    rol: 2
  },
  {
    name: "Luis Rodriguez",
    email: "luis.rodriguez@example.com",
    password: "password123",
    photo: "https://example.com/photos/luis.jpg",
    rol: 1
  },
  {
    name: "Laura Fernandez",
    email: "laura.fernandez@example.com",
    password: "password123",
    photo: "https://example.com/photos/laura.jpg",
    rol: 2
  },
  {
    name: "Miguel Torres",
    email: "miguel.torres@example.com",
    password: "password123",
    photo: "https://example.com/photos/miguel.jpg",
    rol: 1
  },
  {
    name: "Sofia Ramirez",
    email: "sofia.ramirez@example.com",
    password: "password123",
    photo: "https://example.com/photos/sofia.jpg",
    rol: 2
  },
  {
    name: "Diego Lopez",
    email: "diego.lopez@example.com",
    password: "password123",
    photo: "https://example.com/photos/diego.jpg",
    rol: 1
  },
  {
    name: "Isabel Morales",
    email: "isabel.morales@example.com",
    password: "password123",
    photo: "https://example.com/photos/isabel.jpg",
    rol: 2
  },
  {
    name: "Pedro Alvarez",
    email: "pedro.alvarez@example.com",
    password: "password123",
    photo: "https://example.com/photos/pedro.jpg",
    rol: 1
  },
  {
    name: "Lucia Herrera",
    email: "lucia.herrera@example.com",
    password: "password123",
    photo: "https://example.com/photos/lucia.jpg",
    rol: 2
  },
  {
    name: "Jorge Diaz",
    email: "jorge.diaz@example.com",
    password: "password123",
    photo: "https://example.com/photos/jorge.jpg",
    rol: 1
  },
  {
    name: "Elena Ruiz",
    email: "elena.ruiz@example.com",
    password: "password123",
    photo: "https://example.com/photos/elena.jpg",
    rol: 2
  },
  {
    name: "Fernando Castillo",
    email: "fernando.castillo@example.com",
    password: "password123",
    photo: "https://example.com/photos/fernando.jpg",
    rol: 1
  }
];

User.insertMany(users)