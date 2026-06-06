/**
 * Konfigurasi PWA Manaba Burger & Kebab
 * Ganti appsScriptUrl dengan URL Web App Google Apps Script yang berakhiran /exec.
 */
window.MANABA_PWA_CONFIG = {
  appsScriptUrl: 'https://script.google.com/a/~/macros/s/AKfycbxE-bpS6hIKyYbrid_kDIxj9gIbTfTmz6Gz1Ha7atgBauSUAqu2Mr4S8cgV3vng7PDl/exec',
  maxLoadingMs: 7000,

  // false = lebih cepat. true = selalu paksa reload iframe Apps Script.
  forceFreshAppsScript: false
};
