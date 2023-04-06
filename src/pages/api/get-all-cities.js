import pool from "./lib/connection";

export default async function handler(req, res) {
  const connection = await pool.getConnection();
  const [rows, fields] = await connection.execute("SELECT * FROM cities");
  connection.release();
  res.json(rows);
}
