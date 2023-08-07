// src/store.js
import { createStore } from 'vuex'
import { db } from '../firebase/firebase'
import { getDocs, collection, doc, deleteDoc, addDoc, updateDoc, getDoc } from 'firebase/firestore'

const store = createStore({
  state() {
    return {
      modoNocturno: false,
      usuario: [],
      id: null,
      usuarios: [],
      conexion: false
    };
  },
  mutations: {
    setUsuario(state, { value, id }) {
      state.usuario = value
      state.id = id

    },
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
    async crearUsuario(form) {
      console.log(form)
      const collectionRef = collection(db, 'usuario');
      const docRef = await addDoc(collectionRef, form);
    },
    async setUsuario({ commit }, form) {
      console.log(form)
      commit('setUsuario', form)
    },
    async updateUsuario({ commit }, { value, id }) {
      console.log(id)
      // Actualizar un elemento en Firebase Firestore
      const itemRef = doc(db, 'usuario', id);
      await updateDoc(itemRef, value);
      console.log('El elemento ha sido editado correctamente');
      // commit('updateItem', { index, newItem: item })  lo dejo para recordarme actualizar en este caso al recaagar no necesita el commit 

    },
  }
})


export default store
