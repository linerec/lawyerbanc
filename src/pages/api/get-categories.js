import { pool } from "./lib/connection";

export default async function handler(req, res) {
  const { parent_id } = req.query;

  try {
    let sql = "SELECT * FROM field_categories";
    let params = [];

    if (parent_id) {
      sql += " WHERE parent_id = ?";
      params = [parent_id];
    } else {
      sql += " WHERE parent_id IS NULL";
    }

    const [rows, fields] = await pool.query(sql, params);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
