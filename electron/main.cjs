const { app, BrowserWindow, session, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');

// التعامل مع أحداث التثبيت (Squirrel - لنظام ويندوز) لضمان إنشاء الاختصارات بشكل صحيح
if (require('electron-squirrel-startup')) {
  app.quit();
}

// تحديد بيئة التشغيل
const isDev = !app.isPackaged;

function createWindow() {
  // إعداد سياسة أمان المحتوى (CSP) للسماح بالاتصال بخوادم Google Gemini ومصادر الويب
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

  // منح صلاحيات الميكروفون تلقائياً (ضروري للمساعد الصوتي الذكي)
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    const allowedPermissions = ['media']; // media يشمل الميكروفون والكاميرا
    if (allowedPermissions.includes(permission)) {
      callback(true);
    } else {
      callback(false);
    }
  });

  // إعداد النافذة الرئيسية
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: "الكتاب التفاعلي - الدراسات الاجتماعية",
    icon: path.join(__dirname, '../public/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // preload: path.join(__dirname, 'preload.js'), // يمكن تفعيله إذا كان لديك ملف preload
      sandbox: false, // تعطيل الـ sandbox لضمان عمل بعض مكتبات العقدة إذا لزم الأمر
      webSecurity: true
    },
    show: false, // إخفاء النافذة حتى يكتمل التحميل
    autoHideMenuBar: true // إخفاء شريط القوائم العلوي لمظهر أكثر حداثة
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

  // فتح الروابط الخارجية (مثل المصادر الإثرائية) في المتصفح الافتراضي
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:') || url.startsWith('http:') || url.startsWith('mailto:')) {
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