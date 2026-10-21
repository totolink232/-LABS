// 1. Перевірка, чи є рядок IP-адресою (IPv4)
function isIPAddress(ip) {
  let regex = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
  return regex.test(ip);
}

// 2. Пошук кольору формату rgba(r, g, b, a)
function findRGBA(text) {
  let regex = /rgba\(\s*(25[0-5]|2[0-4]\d|[01]?\d\d?)\s*,\s*(25[0-5]|2[0-4]\d|[01]?\d\d?)\s*,\s*(25[0-5]|2[0-4]\d|[01]?\d\d?)\s*,\s*(0|1|0?\.\d+)\s*\)/i;
  let match = text.match(regex);
  return match ? match[0] : null;
}

// 3. Пошук кольору у форматі #ABC або #ABCDEF
function findHexColor(text) {
  let match = text.match(/#([0-9a-f]{3}){1,2}\b/i);
  return match ? match[0] : null;
}

// 4. Пошук усіх тегів із заданим ім'ям
function findTags(text, tag) {
  let regex = new RegExp(`<\\/?${tag}\\b[^>]*>`, "gi");
  let matches = text.match(regex);
  return matches || [];
}

// 5. Пошук усіх додатних чисел
function findPosNum(text) {
  let matches = text.match(/(?<![-\d])\b\d+(\.\d+)?\b/g);
  if (!matches) return [];
  return matches.filter(function(num) {
    return parseFloat(num) > 0;
  });
}

// 6. Пошук усіх дат у форматі РРРР-ММ-ДД
function findDates(text) {
  let matches = text.match(/\b\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\b/g);
  return matches || [];
}
