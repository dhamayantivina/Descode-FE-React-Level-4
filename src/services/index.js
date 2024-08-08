import axios from "axios";

const BASE_URL = "https://api.contact-manager.project.skyshi.io";

export async function getAllContactsData() {
  return await axios.get(`${BASE_URL}/contacts`).catch((error) => {
    return error;
  });
}

export async function addNewContact(payload) {
  return await axios.post(`${BASE_URL}/contacts`, payload).catch((error) => {
    return error;
  });
}

// 1. Fungsi untuk menghapus data kontak
export async function deleteContact(id) {
  return await axios.delete(`${BASE_URL}/contacts/${id}`).catch((error) => {
    return error;
  });
}

// 2. Fungsi untuk mengubah data kontak
export async function updateContact(id, payload) {
  return await axios.put(`${BASE_URL}/contacts/${id}`, payload).catch((error) => {
    return error;
  });
}
