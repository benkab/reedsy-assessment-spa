const state = {
  comments: []
}

const mutations = {
  addComment(state, comment) {
    state.comments.push(comment)
  }
}

const getters = {
  getComments(state) {
    return state.comments
  }
}

const actions = {
  ADDCOMMENT(context, comment) {
    context.commit('addComment', comment)
  }
}

export default {
  state, mutations, actions, getters
}
