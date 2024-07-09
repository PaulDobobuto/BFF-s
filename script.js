function accionParaCuandoEllaDigaQueSi() {
  Swal.fire({
    title: '¿Somos inseparables?, ¿Increíbles?, ¿Poderosos?, ¿Asombrosos? ¿Muy hermosos?',
    icon: 'question',
    imageUrl: 'https://i.pinimg.com/550x/e1/22/f4/e122f4a11b32633db43652026f989e8e.jpg',
    imageWidth: 150,
    imageHeight: 250,
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      // Redireccionar a la nueva página si responde "Sí"
      window.location.href = "opcionsi.html";
    } else {
      Swal.fire({
        title: '¡Espera!',
        text: 'No se aceptan NO por respuesta 😠',
        imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1864225b-0aa6-4212-8d1d-073c49714f6e/de1oyu6-824ac546-f0ac-469d-a169-b1bfdbf0ca5b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE4NjQyMjViLTBhYTYtNDIxMi04ZDFkLTA3M2M0OTcxNGY2ZVwvZGUxb3l1Ni04MjRhYzU0Ni1mMGFjLTQ2OWQtYTE2OS1iMWJmZGJmMGNhNWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1Ig-eD8Pp_p8js3sfVL_YaUXKtOy4EU4e3Yy11z15iE',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Una imagen personalizada',
      });
    }
  });
}

function mueveElBoton() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const newWidth = Math.random() * width;
  const newHeight = Math.random() * height;

  const btnNo = document.getElementById("btnNo");
  btnNo.style.position = "absolute";
  btnNo.style.left = newWidth + "px";
  btnNo.style.top = newHeight + "px";
}
