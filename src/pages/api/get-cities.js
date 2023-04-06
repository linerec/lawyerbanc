import { pool } from "./lib/connection";

export default async function handler(req, res) {
  const { state } = req.query;

  if (!state) {
    return res.status(400).json({ error: "State code is required." });
  }

  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query(
      "SELECT * FROM cities WHERE state_code = ?",
      [state]
    );
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    if (connection) connection.release();
  }
}
