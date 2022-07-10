class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre,
        this.apellido = apellido, 
        this.libros = libros,
        this.mascotas = mascotas
    }

    getFullName(){
        console.log(`Nombre: ${this.nombre}, apellido: ${this.apellido}`)
    }
    
    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        console.log(`Cantidad de mascotas: ${this.mascotas.length}`)
    }

    addBook(libro){
        this.libros.push(libro)
    }
    
    getBookNames(){
        this.libros.map(l => console.log(l.nombre))
    }
}

const usuario1 = new Usuario('Flor', 'Ferreyra', [{nombre: 'libro1', autor: 'autor1'}], ['Nicole'])

console.log(usuario1)

usuario1.getFullName()
usuario1.addMascota('Petizo')
usuario1.countMascotas()
usuario1.addBook({nombre: 'libro2', autor: 'autor2'})
usuario1.getBookNames()