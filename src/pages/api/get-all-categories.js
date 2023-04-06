import pool from "./lib/connection";

export default async function handler(req, res) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows, fields] = await connection.query(
      "SELECT * FROM field_categories"
    );
    const categories = {};

    rows.forEach((row) => {
      const category = {
        id: row.id,
        name_kor: row.name_kor,
        name_eng: row.name_eng,
      };
      if (row.parent_id) {
        const parentCategory = categories[row.parent_id];
        if (!parentCategory.children) {
          parentCategory.children = [];
        }
        parentCategory.children.push(category);
      } else {
        categories[row.id] = category;
      }
    });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    if (connection) connection.release();
  }
}
