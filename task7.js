class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  off(eventName, callback) {
    if (!this.events[eventName]) return;

    this.events[eventName] = this.events[eventName].filter(
      (cb) => cb !== callback
    );
  }
  emit(eventName, data) {
    if (!this.events[eventName]) return;

    this.events[eventName].forEach((callback) => {
      callback(data);
    });
  }

  once(eventName, callback) {
    const wrapper = (data) => {
      callback(data);
      this.off(eventName, wrapper);
    };

    this.on(eventName, wrapper);
  }
}
const emitter = new EventEmitter();

function loginUser(user) {
  console.log("User Logged In:", user);
}

emitter.on("login", loginUser);

emitter.emit("login", "Fahim");

emitter.off("login", loginUser);

emitter.emit("login", "Mahdi");
 
emitter.once("signup", (user) => {
  console.log("Welcome", user);
});

emitter.emit("signup", "Rakib");
emitter.emit("signup", "Badhon");
