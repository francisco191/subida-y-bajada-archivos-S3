const AWS = require("aws-sdk");  
const fs = require("fs"); 
const s3 = new AWS.S3({ 
    accessKeyId: "AKIAWIHHKH2WM2IUNYHU",
    secretAccessKey: "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"
});           

// DESCARGAR ARCHIVOS DEL S3 A MI MÁQUINA:

let parametrosGetObject = {
    Bucket: "repoarchivosmla",
    Key:"Fulfillment-Mercadolibre.jpg" 
}

s3.getObject(parametrosGetObject, (err, data) => { 
    if(err) {
        throw err;
    } else {
        console.log(data);
    }; 

    fs.writeFile(parametrosGetObject.Key, data.Body, "binary", (err, data) => { 
        if(err) {
            throw err;
        } else {
            console.log("Archivo guardado en tu computadora");
        }
    })
})

// SUBIR ARCHIVOS DE MI MÁQUINA A S3

/*fs.readFile("mensaje3.txt", (err, data) => {
    if(err) {
        throw err;
    } else {
        var parametrosPutObject = {
            Bucket: "repoarchivosmla",
            Key: "mensaje3.txt",
            Body: data
        }
        s3.putObject(parametrosPutObject, (err, data) => {
            if(err) {
                throw err;
            } else {
                console.log("El archivo fue subido con exito a la nube S3");
            }
        })
    }
})*/