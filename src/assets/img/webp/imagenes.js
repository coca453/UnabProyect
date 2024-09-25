import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async () => {
  await imagemin(["../*.{jpg,png}"], {
    destination: "../test/",
    plugins: [imageminWebp({ quality: 80 })],
  });

  console.log("Imágenes convertidas exitosamente");
})();
