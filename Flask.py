#Importamos la libreria flask
from flask import Flask, render_template

#Incializamos la variable
app = Flask(__name__, template_folder= 'templates')


#Ruta - Página principal con la variable inicializada.
@app.route('/')
def principal():
    return render_template('Formulario.html')


#Main del programa
if __name__ == '__main__':
    #Debug = True, para reiniciar automáticamente el servidor.
    app.run(debug=True)