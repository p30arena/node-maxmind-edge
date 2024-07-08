import { hexArray } from './geolite2-country';
import { Buffer } from 'buffer';

export default {
  existsSync: () => { },
  watchFile: () => { },
  readFile: async (fake: string) => {
    // Convert the hexadecimal array back to a Buffer
    return Buffer.from(hexArray.map(hex => parseInt(hex, 16)));
  },
};
