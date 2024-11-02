export class Coffee {
  public id: Number;
  public nombre: string;
  public tipo: string;
  public region: string;
  public sabor: string;
  public altura: Number;
  public imagen: string;

  constructor(
    id: Number,
    nombre: string,
    tipo: string,
    region: string,
    sabor: string,
    altura: Number,
    imagen: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.sabor = sabor;
    this.altura = altura;
    this.imagen = imagen;
  }
}
