// src/store.js
import { createStore } from 'vuex'
import { db } from '../firebase/firebase'
import { getDocs, collection, doc, deleteDoc, addDoc, updateDoc, getDoc } from 'firebase/firestore'

const store = createStore({
  state() {
    return {
      modoNocturno: false,
      usuario: {
        nombre: null,
        alias: null,
        correo: null,
        contrasena: null,
        id: null,
        foto: null,
        sexo: null,
        conexion: false,
        amigos: null,
      },
      usuarios: [],
      conexion: false
    };
  },
  mutations: {
    setUsuarios(state, us) {
      state.usuarios = us
    },
    setModoNocturno(state) {
      state.modoNocturno = !state.modoNocturno
    },
    setConexion(state) {
      state.conexion = !state.conexion
    },
  },
  actions: {
    async fetchUsuarios({ commit }) {
      let us = []
      const querySnapshot = await getDocs(collection(db, 'usuario'));
      us = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data()
      }))
      commit('setUsuarios', us)
      // commit('setIndividual', [])

    },
    modificoModoNocturno({ commit }) {
      commit('setModoNocturno')
    },
    setConexion({ commit }) {
      commit('setConexion')
    },
    async crearUsuario({ commit }, form) {
      console.log(form)
      const collectionRef = collection(db, 'usuario');
      const docRef = await addDoc(collectionRef, form);
      // commit('addItem', { ...item, id: docRef.id })  lo dejo para recordarme actualizar mayormente cuando la action se genera en una misma vista 
    },
  }
})


export default store
