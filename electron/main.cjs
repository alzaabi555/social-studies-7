const { app, BrowserWindow, session, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');

// تحديد بيئة التشغيل (تطوير أم إنتاج)
const isDev = !app.isPackaged;

function createWindow() {
  // إعداد سياسة أمان المحتوى (CSP) للسماح بالاتصال بخوادم Google Gemini
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [
          "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https://* wss://*;" +
          "connect-src 'self' https://generativelanguage.googleapis.com wss://generativelanguage.googleapis.com https://esm.sh https://cdn.tailwindcss.com;" +
          "media-src 'self' blob: data:;" +
          "img-src 'self' data: blob: https://*;"
        ]
      }
    });
  });

  // منح صلاحيات الميكروفون تلقائياً (ضروري للمساعد الصوتي)
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === 'media') {
      return callback(true);
    }
    callback(false);
  });

  // إعداد النافذة الرئيسية
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: "الكتاب التفاعلي - الدراسات الاجتماعية",
    icon: path.join(__dirname, '../public/icon.png'), // تأكد من وجود الأيقونة
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'), // اختياري إذا كنت تستخدم preload
      sandbox: false,
      webSecurity: true 
    },
    show: false // إخفاء النافذة حتى يكتمل التحميل
  });

  // تحميل التطبيق
  if (isDev) {
    // في وضع التطوير: تحميل من سيرفر Vite
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools(); // فتح أدوات المطور
  } else {
    // في وضع الإنتاج: تحميل ملف index.html المبني
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // إظهار النافذة عند جاهزية المحتوى لتجنب الوميض الأبيض
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // فتح الروابط الخارجية في المتصفح الافتراضي بدلاً من داخل التطبيق
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:') || url.startsWith('http:')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });
}

// تهيئة التطبيق
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// إغلاق التطبيق عند إغلاق كل النوافذ (ما عدا في macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// التعامل مع أحداث التثبيت (Squirrel - لنظام ويندوز)
if (require('electron-squirrel-startup')) {
  app.quit();
}
