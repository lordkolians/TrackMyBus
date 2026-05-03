const DB_NAME = 'tmb_geo_v4';
const STORE = 'geo';

function openDB(): Promise<IDBDatabase> {
  return new Promise((res, rej) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = (e) => {
      (e.target as IDBOpenDBRequest).result.createObjectStore(STORE, { keyPath: 'id' });
    };
    req.onsuccess = (e) => res((e.target as IDBOpenDBRequest).result);
    req.onerror = () => rej(new Error('IndexedDB open failed'));
  });
}

export async function getCachedGeo(id: number): Promise<[number, number][] | null> {
  try {
    const db = await openDB();
    return new Promise((res) => {
      const req = db.transaction(STORE, 'readonly').objectStore(STORE).get(id);
      req.onsuccess = (e) => res((e.target as IDBRequest).result?.geo ?? null);
      req.onerror = () => res(null);
    });
  } catch {
    return null;
  }
}

export async function setCachedGeo(id: number, geo: [number, number][]): Promise<void> {
  try {
    const db = await openDB();
    db.transaction(STORE, 'readwrite').objectStore(STORE).put({ id, geo });
  } catch {
    // silently ignore
  }
}
