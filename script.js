
 function stringChop(str, length) {
  if (!str) return []; // Handle null or empty string

  const chunks = [];
  for (let i = 0; i < str.length; i += length) {
    chunks.push(str.slice(i, i + length));
  }
  return chunks;
}
