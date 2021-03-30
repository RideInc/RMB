const update = () => ({ type: 'UPDATE' })

const setCategory = (id) => ({ type: 'SET_CATEGORY',
                               payload: id })

const setQuestion = (id) => ({ type: 'SET_QUESTION',
                               payload: id })

const hidePlayer = () => ({ type: 'HIDE_PLAYER' })

const addNewQuestion = () => ({ type: 'ADD_NEW_QUESTION' })

const editCategory = () => ({ type: 'EDIT_CATEGORY' })

const editQuestion = (id) => ({ type: 'EDIT_QUESTION',
                                payload: id})

const alert = (text, type = true) => ({ type: 'ALERT',
                                        payload: [text, type] })

const categorySearch = (text) => ({ type: 'CATEGORY_SEARCH',
                                    payload: text })

const questionSearch = (text) => ({ type: 'QUESTION_SEARCH',
                                    payload: text  })

const confirm = (func = () => {}, id, type, name = '', new_name = '', dont_close = false) => ({
  type: 'MODAL',
  payload: [func, id, type, name, new_name, dont_close]
})

const auth = (auth_success = false) => ({ type: 'AUTH', payload: auth_success })

const profile = (current_profile) => ({ type: 'PROFILE',
                                        payload: current_profile })

export {
  setCategory,
  setQuestion,
  hidePlayer,
  update,
  addNewQuestion,
  editCategory,
  editQuestion,
  alert,
  categorySearch,
  questionSearch,
  confirm,
  auth,
  profile
}
