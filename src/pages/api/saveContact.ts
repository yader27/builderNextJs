import type { NextApiRequest, NextApiResponse } from "next";

import { conn } from '@/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {



    const {method,body}= req

  if (method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    if (!body || typeof body !== "object") {
      throw new Error("Invalid or missing data in the request body");
    }

    // Extraer claves y valores del objeto data
    const keys = Object.keys(body);
    const values = Object.values(body);

    // Construir la parte de la consulta para los parámetros
    const placeholders = Array.from(
      { length: keys.length },
      (_, index) => `$${index + 1}`
    ).join(", ");

    // Construir la consulta y los valores para la inserción
    const query = `INSERT INTO contacts(${keys.join(
      ", "
    )}) VALUES (${placeholders})`;
    const queryValues = values;

    // Ejecutar la consulta
    await conn.query(query, queryValues);
    return res.json({ message: "request is successfully" });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}
