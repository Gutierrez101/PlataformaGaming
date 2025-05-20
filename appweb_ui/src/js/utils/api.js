import { API_BASE_URL, API_KEY } from '../../config.js';

/** Consumo de API IA */
export const aiApi = {
  async createItem(type, data) {
    const res = await fetch(`${API_BASE_URL}/${type}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${API_KEY}` },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`Error al crear ${type}`);
    return res.json();
  },
  async fetchItems(type) {
    const res = await fetch(`${API_BASE_URL}/${type}`, { headers: { 'Authorization': `Bearer ${API_KEY}` } });
    if (!res.ok) throw new Error(`Error al obtener ${type}`);
    return res.json();
  }
};