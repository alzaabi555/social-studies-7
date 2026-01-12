// هذا السطر هو الذي يعالج التثبيت، وبدونه لا يفتح التطبيق
if (require('electron-squirrel-startup')) {
  require('electron').app.quit();
  process.exit(0);
}

const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    // تأكد من وجود الأيقونة في المجلد public
    icon: path.join(__dirname, '../public/icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webSecurity: true
    },
    autoHideMenuBar: true,
    title: "الكتاب التفاعلي",
    backgroundColor: '#F8FAFC'
  });

  if (isDev) {
    win.loadURL('http://localhost:5173');
    // win.webContents.openDevTools(); 
  } else {
    // في الإنتاج، يحمل الملف الذي تم بناؤه
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // التعامل مع الروابط الخارجية
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:') || url.startsWith('http:')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// IPC Listeners (مثال لاستقبال الرسائل)
ipcMain.on('toMain', (event, args) => {
  console.log("Received:", args);
  event.sender.send('fromMain', `تم استلام الرسالة: ${args}`);
});
