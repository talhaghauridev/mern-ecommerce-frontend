class SessionStorageInstance {
  constructor() {}

  set(key, value) {
    const val = JSON.stringify(value);
    if (val !== undefined && val !== null) {
      sessionStorage.setItem(key, val);
    }
  }

  get(key) {
    return key ? JSON.parse(sessionStorage.getItem(key)) : null;
  }

  remove(key) {
    sessionStorage.removeItem(key);
  }
}

const SessionStorage = new SessionStorageInstance();
export default SessionStorage;
