export default function cleanSet (set, startString) {
  const values = Array.from(set);
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  return values.filter(val => val.startsWith(startString)).map(val => val.slice(startString.length)).join('-');
}
