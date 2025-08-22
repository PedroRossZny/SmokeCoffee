export function maskDateInput(text = '') {
  const digits = text.replace(/\D/g, '').slice(0, 8); 
  const p1 = digits.slice(0, 2);
  const p2 = digits.slice(2, 4);
  const p3 = digits.slice(4, 8);
  if (digits.length <= 2) return p1;
  if (digits.length <= 4) return `${p1}/${p2}`;
  return `${p1}/${p2}/${p3}`;
}

export function isValidDateDDMMYYYY(v = '') {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(v)) return false;
  const [d, m, y] = v.split('/').map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d;
}

export function formatDateForDisplay(v = '') {
  if (!v) return '';
  if (/^\d{8}$/.test(v)) {
    return `${v.slice(0,2)}/${v.slice(2,4)}/${v.slice(4,8)}`;
  }
  return v;
}
