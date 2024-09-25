const fs = require("fs");
const path = require("path");
const gifFrames = require("gif-frames");
const sharp = require("sharp");

// Directorios de entrada y salida
const inputDir = "../"; // Carpeta que contiene los GIFs
const outputDir = "./avifs"; // Carpeta donde se guardarán los AVIFs

// Verifica si la carpeta de salida existe, si no, la crea
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Función para convertir GIF a AVIF
const convertGifToAvif = async (gifPath, outputFileName) => {
  try {
    // Extraer los cuadros del GIF
    const frames = await gifFrames({
      url: gifPath,
      frames: "all",
      outputType: "png",
    });

    // Convertir cada cuadro a AVIF
    for (let i = 0; i < frames.length; i++) {
      const frame = frames[i];

      // Guardar el archivo PNG temporal
      const frameFilePath = path.join(
        outputDir,
        `${outputFileName}-frame-${i}.png`
      );
      const avifFilePath = path.join(
        outputDir,
        `${outputFileName}-frame-${i}.avif`
      );

      // Escribir el archivo PNG
      const pngStream = frame.getImage();
      const writeStream = fs.createWriteStream(frameFilePath);

      pngStream.pipe(writeStream).on("finish", async () => {
        // Cuando se escriba el PNG, convertirlo a AVIF
        await sharp(frameFilePath)
          .avif({ quality: 50 }) // Ajusta la calidad si es necesario
          .toFile(avifFilePath);

        console.log(`Frame ${i + 1} de ${outputFileName} convertido a AVIF`);

        // Opcional: Eliminar el PNG temporal
        fs.unlinkSync(frameFilePath);
      });
    }
  } catch (error) {
    console.error(`Error al convertir ${outputFileName}:`, error.message);
  }
};

// Función principal para leer todos los GIFs de la carpeta
const convertAllGifsInFolder = async () => {
  fs.readdir(inputDir, (err, files) => {
    if (err) {
      console.error("Error al leer la carpeta de GIFs:", err);
      return;
    }

    // Filtrar los archivos GIF
    const gifFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".gif"
    );

    if (gifFiles.length === 0) {
      console.log("No se encontraron archivos GIF en la carpeta.");
      return;
    }

    // Convertir cada archivo GIF a AVIF
    gifFiles.forEach((gifFile) => {
      const gifPath = path.join(inputDir, gifFile);
      const outputFileName = path.parse(gifFile).name; // Nombre sin la extensión

      convertGifToAvif(gifPath, outputFileName);
    });
  });
};

// Ejecutar la conversión de todos los GIFs en la carpeta
convertAllGifsInFolder();
