document.addEventListener('DOMContentLoaded', function() {
    // Validación de contraseña
    var form = document.getElementById('registro-form');
    var passwordInput = document.getElementById('contrasena');
  
    form.addEventListener('submit', function(event) {
      if (passwordInput.value.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        event.preventDefault(); // Evita que se envíe el formulario
      }
    });
  });
  