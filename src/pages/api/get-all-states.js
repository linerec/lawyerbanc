import { pool } from "./lib/connection";

export default async function handler(req, res) {
  try {
    const [rows, fields] = await pool.execute("SELECT * FROM states");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
