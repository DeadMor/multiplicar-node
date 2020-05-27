const fs = require('fs');
const color = require("colors");

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = "";
        if (!Number(base)) {
            reject(`el valor introducido: ${base} no es un numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += base + " * " + i + " = " + base * i + "\n";
            //console.log(`${base} * ${i} = ${base*i}`);
        }

        fs.writeFile(`tablas/tabla del ${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla del ${base}.txt`);

        });
    });
}

let listarTabla = (base, limite) => {
    console.log("================".green);
    console.log(`====Tabla de ${base}======`.green);
    console.log("================".green);

    for (let i = 1; i <= limite; i++) {


        console.log(`${base} * ${i} = ${base*i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}