import { pool } from "../lib/connection";

export default async function handler(req, res) {
  const id = req.query.id || "/";

  let connection = null;

  try {
    connection = await pool.getConnection();

    const [rows] = await connection.query(
      `SELECT * FROM seo_data WHERE page_name = ?`,
      [id]
    );

    // If there is no result for the given id, try to get data for the default page
    if (rows.length === 0 && id !== "/") {
      const [defaultRows] = await connection.query(
        `SELECT * FROM seo_data WHERE page_name = ?`,
        ["/"]
      );
      res.status(200).json(defaultRows[0]);
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
