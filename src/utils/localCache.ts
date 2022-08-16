class localCache {
  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  get(key: string) {
    const cache = window.localStorage.getItem(key)
    if (cache) {
      return JSON.parse(cache)
    }
  }
  remove(key: string) {
    window.localStorage.removeItem(key)
  }
  clear() {
    window.localStorage.clear()
  }
}

export default new localCache()
