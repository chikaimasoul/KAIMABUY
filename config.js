// 前台只放公開資訊；試算表 ID 設定在 Apps Script，不放 GitHub。
window.SHOP_CONFIG = {
  scriptUrl: 'https://script.google.com/macros/s/AKfycbw8bzo6UTUctwaSy9XhtkHjURTVhKaOsF5y3jXXuxIyOMrDPFL39FVO5g6X7mn_Zmj9Xw/exec', // Google Apps Script 網頁應用程式 /exec 網址
  lineUrl: 'https://lin.ee/SIBRj7v', // 官方 LINE 連結，例如 https://lin.ee/...
  linePayQr: 'assets/linepay.png', // QR Code 圖片路徑，例如 assets/linepay.png
  shipping: { home: 65, family: 60 }, // 請填運費數字；0 代表免運
  bankCode: '700', bankAccount: '00415700152886', bankName: '郵局', accountName: '張家馨'
};
