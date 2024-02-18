class LocalStorageInstance {
  constructor() {}

  set(key, value) {
    const val = JSON.stringify(value);

    val && localStorage.setItem(key, val);
  }

  get(key) {
    return key ? JSON.parse(localStorage.getItem(key)) : null;
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}

const LocalStorage = new LocalStorageInstance();
export default LocalStorage;
