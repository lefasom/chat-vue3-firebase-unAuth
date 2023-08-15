// src/store.js
import { createStore } from 'vuex'
import { db } from '../firebase/firebase'
import { getDocs, collection, doc, deleteDoc, addDoc, updateDoc, getDoc, query, orderBy } from 'firebase/firestore'

const store = createStore({
  state() {
    return {
      modoNocturno: false,
      mensajes: [],
      usuario: [],
      id: null,
      usuarios: [],
      conexion: false
    };
  },
  mutations: {

    // chat

    setMensajes(state, msj) {
      state.mensajes = msj
    },
    // usuarios

    setUsuario(state, { value, id }) {
      state.usuario = value
      state.id = id
    },
    setUsuarios(state, us) {
      state.usuarios = us
    },
    setConexion(state) {
      state.conexion = !state.conexion
    },
    // modoNocturno

    setModoNocturno(state) {
      state.modoNocturno = !state.modoNocturno
    },
  },
  actions: {
    // chat
    async fetchMensajes({ commit },msj) {

      commit('setMensajes', msj)
    },
    async crearMensaje({ commit }, value) {
      const collectionRef = collection(db, 'mensajes');
      const docRef = await addDoc(collectionRef, value);
    },
    // modoNocturno

    modificoModoNocturno({ commit }) {
      commit('setModoNocturno')
    },
    // usuarios

    async fetchUsuarios({ commit }) {
      let us = []
      const querySnapshot = await getDocs(collection(db, 'usuario'));
      us = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data()
      }))
      commit('setUsuarios', us)
    },
    setConexion({ commit }) {
      commit('setConexion')
    },
    async crearUsuario({ commit }, value) {
      console.log('cosole de store', value)
      const collectionRef = collection(db, 'usuario');
      const docRef = await addDoc(collectionRef, value);
    },
    async setUsuario({ commit }, { value, id }) {
      commit('setUsuario', { value, id })
    },
    async updateUsuario({ commit }, { value, id }) {
      console.log(id)
      const itemRef = doc(db, 'usuario', id);
      await updateDoc(itemRef, value);
      console.log('El elemento ha sido editado correctamente');
    },
    async conexion({ commit }, { value, id, state }) {
      const itemRef = doc(db, 'usuario', id);
      let form =
      {
        alias: value.alias,
        contrasena: value.contrasena,
        correo: value.correo,
        foto: value.foto,
        conexion: state
      }
      await updateDoc(itemRef, form);
      console.log('cambia estado de conexion');
    },
  }
})


export default store
