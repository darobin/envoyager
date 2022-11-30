
import { writeFile } from 'fs/promises';

export default async function saveJSON (url, obj) {
  return writeFile(url, JSON.stringify(obj, null, 2));
}
