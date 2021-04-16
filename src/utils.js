export function arrSort(arr, key) {
  if (key === "fullname") arr.sort((a, b) => a.key.localeCompare(b.key));
  if (key === "isActive") arr.sort((a, b) => a.key - b.key);
  if (key === "lastSeen") arr.sort((a, b) => new Date(a.key) - new Date(b.key));
}
