# Estrategia de Pruebas Unitarias

* Se define el Alcance de las Pruebas:
    Se identifica las funciones y componentes clave del código que necesitan ser probados.
    En este caso, considero que las funciones principales son checkGuess, setGameOver, y resetGame.

* Configurar el Entorno de Pruebas:
    Se verifica que el entorno de pruebas esté correctamente configurado con Qunit.
    Para una mejor comprensión se separa el código JavaScript en un archivo independiente (game.js) para facilitar las pruebas.

# Escribir Casos de Prueba:
* Casos de Prueba para checkGuess:
    Se verifica que el número aleatorio se genera correctamente entre 1 y 100.
    Se pone a prueba la lógica de comparación del número ingresado por el usuario con el número aleatorio.
    Se verifica los mensajes de resultado y los colores de fondo.

# Casos de Prueba para setGameOver:
    Se asegura de que los campos de entrada y el botón de envío se deshabiliten.
    Se verifica que el botón de reinicio se crea y se añade al DOM.

# Casos de Prueba para resetGame:
    Se verifica que el juego se reinicia correctamente, incluyendo la generación de un nuevo número aleatorio y la reactivación de los campos de entrada y el botón de envío.

# Ejecutar las Pruebas:
    Se utiliza Qunit para ejecutar las pruebas y verificar que todas pasen.
    Se revisa los resultados y corregir cualquier error detectado.

# Mantener y Actualizar las Pruebas:
    A medida que el código evoluciona, es necesario actualizar y añadir nuevas pruebas para cubrir todos los casos posibles.
    Realizar pruebas de regresión para asegurarse de que los cambios no introduzcan nuevos errores.