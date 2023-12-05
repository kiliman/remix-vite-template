import { singleton } from './singleton.server'

const db = singleton('db', () => ({
  _counter: 0,
  getCount() {
    return this._counter
  },
  increment() {
    this._counter++
  },
}))

export { db }
