export function crearObjetosDesdeString(texto) {
  if (!texto || texto === "") return [];

  const lineas = texto.split("\n"); // Divide el texto en líneas usando el salto de línea como separador
  const objetos = [];

  lineas.forEach((linea) => {
    const campos = linea.split(",").map((campo) => campo.trim()); // Divide cada línea en campos y elimina espacios en blanco alrededor
    const nombre = campos[0];
    const cantidad = parseFloat(campos[1]);
    const precio = parseFloat(campos[2]);

    // Verifica que la línea tenga los tres campos necesarios
    if (nombre && !isNaN(cantidad) && !isNaN(precio)) {
      objetos.push({ nombre, cantidad, precio });
    }
  });

  return objetos;
}
