export function canConstruct(ransomNote: string, magazine: string): boolean {
  for (const element of ransomNote.split("")) {
    const pos = magazine.indexOf(element);
    if (pos === -1) {
      return false;
    }
    magazine = magazine.slice(0, pos) + magazine.slice(pos + 1);
  }
  return true;
}
