import firebase from "firebase";
import "firebase/firestore";
import "firebase/database";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCz-Sf6gnfUmHw3tG8zVyr6gA-95g6_Sh4",
    authDomain: "proyectotv-c83e4.firebaseapp.com",
    databaseURL: "https://proyectotv-c83e4.firebaseio.com",
    projectId: "proyectotv-c83e4",
    storageBucket: "proyectotv-c83e4.appspot.com",
    messagingSenderId: "97019704245"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

class UtilBaseDatos {

    static autenticarConGoogle() {

        console.log("entré");
        firebase.auth().signInWithPopup(provider).then(function (result) {
            console.log(result.user)
        });
    }

    //Guardar en la base de datos--------------

    static guardarBaseDatos(coleccion, documento) {
        firebase.database().ref(coleccion).set(documento);
    }

    static guardarComentario(idVideo, idEstudiante, textoComentario, tituloComentario)
    {
        var comentario = {
            idComentario: firebase.database().ref().child('Comentarios').push().key,
            idVideo: idVideo,
            idEstudiante: idEstudiante,
            comentario: textoComentario,
            tituloComentario: tituloComentario,
        }

        this.guardarBaseDatos("Comentarios/" + comentario.idComentario, comentario);
    }

    static guardarRespuestaComentario(idComentario, idEstudiante, textoComentario, tituloComentario)
    {
        var respuestaComentario = {
            idRespuestaComentario: firebase.database().ref().child('RespuestaComentarios').push().key,
            idComentario: idComentario,
            idEstudiante: idEstudiante,
            comentario: textoComentario
        }

        this.guardarBaseDatos("RespuestaComentarios/" + respuestaComentario.idRespuestaComentario, respuestaComentario);
    }

    //Guardar en la base de datos--------------


    //Consultar en la base de datos--------------

    static consultarBaseDatos(coleccion) {
        var respuesta;
        firebase.database().ref(coleccion).on("value", function(snapshot){
            respuesta = snapshot.val();
        })

        return respuesta;
    }

    static consultarComentario() {

        return this.consultarBaseDatos("Comentarios");
    }

    static consultarRespuestaComentario() {

        return this.consultarBaseDatos("RespuestaComentarios");
    }

    //Consultar en la base de datos--------------
}

export default UtilBaseDatos;