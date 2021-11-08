//Modelo de clase para creación de nueva oferta.
export class NewOffer {
  id: string;
  titulo: string;
  descripcion: string;
  empresa: string;
  salario: number;
  ciudad: string;
  email: string;

  constructor(
    id: string,
    titulo: string,
    descripcion: string,
    empresa: string,
    salario: number,
    ciudad: string,
    email: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.empresa = empresa;
    this.salario = salario;
    this.ciudad = ciudad;
    this.email = email;
  }
}
