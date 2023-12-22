import { adminApi } from "@/api";
import { Contact } from "@/interfaces";


export const saveContact = async (data: Contact) => {
  try {
    await adminApi.post(`/saveContact`, data);
    
  } catch (error) {
    console.error(error);
  }
};



