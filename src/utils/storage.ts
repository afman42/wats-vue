import { AList } from "@/types";

export const storeData = (storageKey: string, value: AList) => {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    alert('Gagal menyimpan di localstorage');
  }
};

export const getData = (storageKey: string) => {
  try {
    const jsonValue = localStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert('Gagal mengambil data dari localstorage');
  }
};