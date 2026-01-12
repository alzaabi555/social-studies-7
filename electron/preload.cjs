const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  versions: process.versions,
  send: (channel, data) => {
    let validChannels = ['toMain'];
    if (validChannels.includes(channel)) ipcRenderer.send(channel, data);
  },
  receive: (channel, func) => {
    let validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.removeAllListeners(channel);
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
});