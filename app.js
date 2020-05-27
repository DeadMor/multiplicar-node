const argv = require('./config/config').argv;
const color = require("colors");

const { crearArchivo, listarTabla } = require('./tablas/multiplicar');


console.log('Limite', argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        let base = argv.base;
        crearArchivo(base, argv.limite)
            .then(archivo => console.log(`Archivo creado:` + ` ${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log("COMANDO NO RECONCOCIDO");
}

// let parametro = argv[2];
// let base = parametro.split('=')[1]