const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs.js");
console.clear();
/* console.log(argv); */

/* console.log("base: yargs", argv.b); */

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creada"))
  .catch((err) => console.log(err));
