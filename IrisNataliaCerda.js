//Sistema de gestion para una biblioteca que permitirá administrar los libros y usuarios.
//Se declara un array de objetos para almacenar los libros y otro para los usuarios.
let libros = [
    { id: 1, titulo: "La bella durmiente", autor: "Charles Perrault", anio: 1697, genero: "Fantasía", disponible: true },
    { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967, genero: "Realismo mágico", disponible: true },
    { id: 3, titulo: "El túnel", autor: "Ernesto Sabato", anio: 1948, genero: "Psicológico", disponible: true },
    { id: 4, titulo: "Rayuela", autor: "Julio Cortázar", anio: 1963, genero: "Experimental", disponible: true },
    { id: 5, titulo: "El Aleph", autor: "Jorge   Luis Borges", anio: 1945, genero: "Ficción", disponible: true },
    { id: 6, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605, genero: "Novela", disponible: true },
    { id: 7, titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez", anio: 1985, genero: "Romántico", disponible: true },
    { id: 8, titulo: "La casa de los espíritus", autor: "Isabel Allende", anio: 1982, genero: "Realismo mágico", disponible: true },
    { id: 9, titulo: "Pedro Páramo", autor: "Juan Rulfo", anio: 1955, genero: "Ficción", disponible: true },
    { id: 10, titulo: "El túnel", autor: "Ernesto Sabato", anio: 1948, genero: "Psicológico", disponible: true },
    { id: 11, titulo: "Ficciones", autor: "Jorge Luis Borges", anio: 1944, genero: "Ficción", disponible: true },
];
let usuarios = [{ id: 1, nombre: "Juan Pérez", email: "juanperez@example.com", librosPrestados: [] },
{ id: 2, nombre: "María García", email: "mariagarcia@example.com", librosPrestados: [] },
{ id: 3, nombre: "Carlos López", email: "carloslopez@example.com", librosPrestados: [] },
{ id: 4, nombre: "Ana Martínez", email: "anamartinez@example.com", librosPrestados: [] },
{ id: 5, nombre: "Luis Fernández", email: "luisfernandez@example.com", librosPrestados: [] },
{ id: 6, nombre: "Laura Sánchez", email: "laurasanchez@example.com", librosPrestados: [] },
];
//Implementar una funcion agregarLibro(id,titulo,autor,anio,denero) que agregue un nuevo libro al array.
function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = { id, titulo, autor, anio, genero, disponible: true };
    libros.push(nuevoLibro);
}
//llamar a la funcion agregarLibro para agregar un nuevo libro.

//Implementar una funcion registrarUsuario(nombre,email) que agregue un nuevo usuario al
function registrarUsuario(nombre, email) {
    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre,
        email,
        librosPrestados: []
    };
    usuarios.push(nuevoUsuario);
}
//llamar a la funcion registrarUsuario para agregar un nuevo usuario.

//llamar a una funcion que muestre todos los libros disponibles.
function mostrarLibrosDisponibles() {
    const librosDisponibles = libros.filter(libro => libro.disponible);
    console.log("Libros disponibles:");
    librosDisponibles.forEach(libro => {
        console.log(`${libro.titulo} de ${libro.autor} (${libro.anio}) - Género: ${libro.genero}`);
    });
}
//llamar a una funcion que muestre todos los usuarios incluyendo el que se agregó.
function mostrarUsuarios() {
    console.log("Usuarios registrados:");
    usuarios.forEach(usuario => {
        console.log(`${usuario.nombre} (${usuario.email})`);
    });
}

//Crear una funcion buscarLibro(criterio,valor) que permita buscar libros por titulo, autor o genero, utilizando el algoritmo de busqueda lineal.
function buscarLibro(criterio, valor) {
    const librosEncontrados = libros.filter(libro => libro[criterio] && libro[criterio].toLowerCase().includes(valor.toLowerCase()));
    if (librosEncontrados.length > 0) {
        console.log(`Libros encontrados por ${criterio} "${valor}":`);
        librosEncontrados.forEach(libro => {
            console.log(`${libro.titulo} de ${libro.autor} (${libro.anio}) - Género: ${libro.genero}`);
        });
    } else {
        console.log(`No se encontraron libros con ${criterio} "${valor}".`);
    }
}
//Desarrollar una funcion ordenarLibros(criterio) que permita ordenar los libros por titulo, autor o año de publicacion. utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestra los libros ordenados en la consola.
function ordenarLibros(criterio) {
    const criteriosValidos = ["titulo", "autor", "anio"];
    if (!criteriosValidos.includes(criterio)) {
        console.log(`Criterio de ordenamiento inválido. Los criterios válidos son: ${criteriosValidos.join(", ")}`);
        return;
    }
    for (let i = 0; i < libros.length - 1; i++) {
        for (let j = 0; j < libros.length - 1 - i; j++) {
            if (libros[j][criterio] > libros[j + 1][criterio]) {
                [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
            }
        }
    }
    console.log(`Libros ordenados por ${criterio}:`);
    libros.forEach(libro => {
        console.log(`${libro.titulo} de ${libro.autor} (${libro.anio}) - Género: ${libro.genero}`);
    });
    //desarrollar una funcion borrarLibro(id) que permita eliminar un libro del array de libros.
    function borrarLibro(id) {
        const indice = libros.findIndex(libro => libro.id === id);
        if (indice !== -1) {
            libros.splice(indice, 1);
            console.log(`Libro con ID ${id} eliminado.`);
        } else {
            console.log(`No se encontró un libro con ID ${id}.`);
        }
    }
    //Crear una funcion buscarUsuario(email) que permita buscar un usuario por su email, utilizando el algoritmo de busqueda lineal.
    function buscarUsuario(email) {
        const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);
        if (usuarioEncontrado) {
            console.log(`Usuario encontrado: ${usuarioEncontrado.nombre} (${usuarioEncontrado.email})`);
        } else {
            console.log(`No se encontró un usuario con email "${email}".`);
        }
    }
    //crear una funcion borrarUsuario(nombre, email) que permita eliminar un usuario del array de usuarios.
    function borrarUsuario(nombre, email) {
        const indice = usuarios.findIndex(usuario => usuario.nombre === nombre && usuario.email === email);
        if (indice !== -1) {
            usuarios.splice(indice, 1);
            console.log(`Usuario ${nombre} (${email}) eliminado.`);
        } else {
            console.log(`No se encontró un usuario con nombre "${nombre}" y email "${email}".`);
        }
    }
    //SISTEMA DE PRESTAMOS. Desarrollar una funcion prestarLibro(idLibro,idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
    function prestarLibro(idLibro, idUsuario) {
        const libro = libros.find(libro => libro.id === idLibro);
        const usuario = usuarios.find(usuario => usuario.id === idUsuario);
        if (libro && usuario) {
            if (libro.disponible) {
                libro.disponible = false;
                usuario.librosPrestados.push(libro);
                console.log(`Libro "${libro.titulo}" prestado a ${usuario.nombre}.`);
            } else {
                console.log(`El libro "${libro.titulo}" ya está prestado.`);
            }
        } else {
            console.log(`Libro o usuario no encontrado.`);
        }
    }
    //Desarrollar una funcion devolverLibro(idLibro,idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
    function devolverLibro(idLibro, idUsuario) {
        const libro = libros.find(libro => libro.id === idLibro);
        const usuario = usuarios.find(usuario => usuario.id === idUsuario);
        if (libro && usuario) {
            if (!libro.disponible) {
                libro.disponible = true;
                usuario.librosPrestados = usuario.librosPrestados.filter(libro => libro.id !== idLibro);
                console.log(`Libro "${libro.titulo}" devuelto por ${usuario.nombre}.`);
            } else {
                console.log(`El libro "${libro.titulo}" no estaba prestado.`);
            }
        } else {
            console.log(`Libro o usuario no encontrado.`);
        }
    }
    //Crear una funcion generarReporteLibros() que utilice metodos avanzados de arrays (.map(), .filter(),.reduce()) para generar un reporte con la siguiente informacion: Cantidad total de libros, Cantidad de libros prestados, Cantidad de libros por género, Libro mas antiguo y mas nuevo.
    function generarReporteLibros() {
        const totalLibros = libros.length;
        const librosPrestados = libros.filter(libro => !libro.disponible).length;
        const librosPorGenero = libros.reduce((acc, libro) => {
            acc[libro.genero] = (acc[libro.genero] || 0) + 1;
            return acc;
        }, {});
        const libroMasAntiguo = libros.reduce((antiguo, libro) => {
            return (libro.anio < antiguo.anio) ? libro : antiguo;
        }, libros[0]);
        const libroMasNuevo = libros.reduce((nuevo, libro) => {
            return (libro.anio > nuevo.anio) ? libro : nuevo;
        }, libros[0]);

        console.log(`Reporte de Libros:
    - Total de libros: ${totalLibros}
    - Libros prestados: ${librosPrestados}
    - Libros por género: ${JSON.stringify(librosPorGenero)}
    - Libro más antiguo: ${libroMasAntiguo.titulo} (${libroMasAntiguo.anio})
    - Libro más nuevo: ${libroMasNuevo.titulo} (${libroMasNuevo.anio})
    `)
    }
    //PROGRAMA PRINCIPAL
    buscarLibro("autor", "Gabriel García Márquez");
    ordenarLibros("titulo");
    ordenarLibros("autor");
    ordenarLibros("anio");
    borrarLibro(3);
    libros.forEach(libro => {
        console.log(`${libro.titulo} de ${libro.autor} (${libro.anio}) - Género: ${libro.genero}`);
    });
}
//implementar una funcion librosConPalabrasEnTitulo() que identifique y muestrentodos los libros cuyo titulo contiene mas de una palabra(no titulos que contengan numeros ni otros caracteres). La funcion funcion debe devolver un array con los titulos de esos libros y mostrarlos en la consola.
function librosConPalabrasEnTitulo() {
    const librosConPalabras = libros.filter(libro => {
        const palabras = libro.titulo.split(" ");
        return palabras.length > 1 && palabras.every(palabra => isNaN(palabra));
    });
    console.log("Libros con más de una palabra en el título:");
    librosConPalabras.forEach(libro => {
        console.log(`- ${libro.titulo}`);
    });
    return librosConPalabras.map(libro => libro.titulo);
}
//Desarrollar una funcion calcularEstadisticas() que utilice el objeto math para calcular y mostrar: promedio de años de publiccacion de los libros Año de publicacion mas fracuante y la diferenci en años entre el libro mas antiguo y mas nuevo.

function calcularEstadisticas() {
    const añosPublicacion = libros.map(libro => libro.anio);
    const promedio = añosPublicacion.reduce((acc, anio) => acc + anio, 0) / añosPublicacion.length;
    const añoMasFrecuente = añosPublicacion.sort((a, b) =>
        añosPublicacion.filter(v => v === a).length - añosPublicacion.filter(v => v === b).length
    ).pop();
    const añoMasAntiguo = Math.min(...añosPublicacion);
    const añoMasNuevo = Math.max(...añosPublicacion);
    const diferencia = añoMasNuevo - añoMasAntiguo;

    console.log(`Estadísticas de Publicación:
    - Promedio de años de publicación: ${promedio.toFixed(2)}
    - Año de publicación más frecuente: ${añoMasFrecuente}
    - Diferencia entre el libro más antiguo y más nuevo: ${diferencia} años
    `);
}
//crear una funcion normalizarDatos() que utilice metodos de stringn para: Convertir todos los titulos a mayusculas, Eliminar espacios en blanco al inicio y al final de los nombres de autores, formatear los emails de los usuarios a minusculas.
function normalizarDatos() {
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase();
        libro.autor = libro.autor.trim();
    });
    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase();
    });
}
//Implementar una funcion principal menuPrincipal() que muestre un menú de opciones al ususario y permita interactuar con el sistema usando prompt(). El menu debe incluir opciones para todas las funcionalidades:
function menuPrincipal() {
    let opcion;
    do {
        opcion = prompt(`Menú Principal:
        1. Buscar Usuario
        2. Borrar Usuario
        3. Prestar Libro
        4. Devolver Libro
        5. Generar Reporte de Libros
        6. Salir
        Elige una opción:`);
        switch (opcion) {
            case "1":
                buscarUsuario("pedroramirez@example.com");
                break;
            case "2":
                borrarUsuario("Pedro Ramírez", "pedroramirez@example.com");
                break;
            case "3":
                prestarLibro(1, 1);
                break;
            case "4":
                devolverLibro(1, 1);
                break;
            case "5":
                generarReporteLibros();
                break;
            case "6":
                alert("Saliendo del sistema...");
                break;
            default:
                alert("Opción inválida. Por favor, elige una opción del 1 al 6.");
        }
    } while (opcion !== "6");
}
librosConPalabrasEnTitulo();
calcularEstadisticas();
normalizarDatos();


