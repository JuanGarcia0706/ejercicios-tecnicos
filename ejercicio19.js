// Dado un array de objetos de peliculas (titulo, director, vista)
// mostrar todas las peliculas indicando cual has visto y cual no

const movies = [
  { titulo: 'Matrix', director: 'John Doe', vista: true },
  { titulo: 'El senor de los anillos', director: 'John Doe', vista: false },
  { titulo: 'Matrix 2', director: 'John Doe', vista: true },
  { titulo: 'Harry Potter', director: 'John Doe', vista: false },
];

const misPeliculas = (p) => {
  p?.forEach(m => console.log(`${m.vista ? 'Ya has visto: ' : 'Te falta ver: '} ${m.titulo} de ${m.director}`));
}

misPeliculas(movies);