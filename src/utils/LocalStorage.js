class LocalStorageInstance {
  constructor() {}

  set(key, value) {
    try {
      const val = JSON.stringify(value);
      if (val !== undefined && val !== null) {
        localStorage.setItem(key, val);
      } else {
        console.error("Invalid value provided for local storage.");
      }
    } catch (error) {
      console.error("Error occurred while setting local storage:", error);
    }
  }

  get(key) {
    try {
      return key ? JSON.parse(localStorage.getItem(key)) : null;
    } catch (error) {
      console.error(
        "Error occurred while getting value from local storage:",
        error
      );
      return null;
    }
  }

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(
        "Error occurred while removing entry from local storage:",
        error
      );
    }
  }
}

const LocalStorage = new LocalStorageInstance();
export default LocalStorage;
