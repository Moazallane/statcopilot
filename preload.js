// preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('statcopilot', {
  greet: () => {
    return "Hello from preload! I'm your AI Copilot 👨‍🏫";
  }
});
