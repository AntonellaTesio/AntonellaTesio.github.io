var meses = new Array(
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
);
var diasSemana = new Array(
    " Domingo",
    " Lunes",
    " Martes",
    " Miércoles",
    " Jueves",
    " Viernes",
    " Sábado"
);
var f = new Date();
document.write(
    diasSemana[f.getDay()] +
    ", " +
    f.getDate() +
    " de " +
    meses[f.getMonth()] +
    " de " +
    f.getFullYear()
);
