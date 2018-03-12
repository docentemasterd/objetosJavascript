function Empleado(Nombre, Antiguedad, PrecioHora, Horas){

	this.Nombre = Nombre;
	this.Antiguedad =  Antiguedad;
	this.PrecioHora = PrecioHora;
	this.Horas = Horas;
    this.Sueldo_mensual = this.PrecioHora * this.Horas * 30;
}




 
       