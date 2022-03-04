//cargar libreria
const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${i * base} \n`;
      consola += `${base} ${"x".yellow} ${i} = ${colors.bold(i * base)} \n`;
    }

    if (listar) {
      console.log("--------------------------".rainbow);
      console.log("Tabla del: ".yellow, colors.green(base));
      console.log("--------------------------".rainbow);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

//exportar
module.exports = {
  crearArchivo,
};
