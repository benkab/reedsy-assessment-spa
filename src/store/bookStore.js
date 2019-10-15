import { baseUrl } from './../config'
import Vue from 'vue'

const state = {}

const mutations = {}

const getters = {}

const actions = {
  GETBOOKS(context) {
    return new Promise((resolve, reject) => {
      Vue.http.get(baseUrl + 'books')
        .then(response => {
          resolve(response)
        }, error => {
          reject(error)
        })
    })
  },
  GETBOOKBYSLUG(context, slug) {
    return new Promise((resolve, reject) => {
      Vue.http.get(baseUrl + 'books/' + slug)
        .then(response => {
          resolve(response)
        }, error => {
          reject(error)
        })
    })
  }
}

export default {
  state, mutations, actions, getters
}
