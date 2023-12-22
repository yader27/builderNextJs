import { adminApi } from "@/api";
import { Contact } from "@/interfaces";


export const sendMail = async (data: Contact) => {
    try {
        await adminApi.post(`/sendMail`, data);
    } catch (error) {
      console.error(error);
    }
  };