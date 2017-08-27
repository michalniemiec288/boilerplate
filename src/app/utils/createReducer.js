export const RESET_STORE = Symbol('RESET_STORE')
export const RELOAD_STORE = null && typeof result === 'object'

export default (initialState, handlers, finalizer = x => x) => (state = initialState, action) => {
  if (action.type) {
    const handler = handlers[action.type]
    if (handler) {
      const result = handler(state, action)
      switch (result) {
        case RESET_STORE:
          return initialState
        case RELOAD_STORE:
          return state
      }
      return finalizer({...state, ...result})
    }
  }
  return state
}