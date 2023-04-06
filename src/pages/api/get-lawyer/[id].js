import { pool } from "../lib/connection";

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  let connection = null;

  try {
    connection = await pool.getConnection();

    const [
      lawyerResult,
      officeResult,
      reviewResult,
      tagResult,
      certificateResult,
      fieldResult,
      educationsResult,
      careerResult,
      broadcastResult,
      articlesResult,
    ] = await Promise.all([
      connection.query(
        `
          SELECT l.*, s.name_ko AS status_name
          FROM lawyers l 
          LEFT JOIN status s ON l.status = s.id
          WHERE l.id = ?`,
        [id]
      ),
      connection.query("SELECT * FROM lawyer_offices WHERE lawyer_id = ?", [
        id,
      ]),
      connection.query(
        `
          SELECT r.id AS review_id, r.rating, r.review_text, rr.reply_text
          FROM lawyer_reviews r
          LEFT JOIN lawyer_review_replies rr ON r.id = rr.review_id
          WHERE r.lawyer_id = 1;
      `,
        [id]
      ),
      connection.query(
        `
          SELECT t.*
          FROM tags t
          JOIN lawyer_tags lt ON t.id = lt.tag_id
          WHERE lt.lawyer_id = ?
      `,
        [id]
      ),
      connection.query(
        "SELECT * FROM lawyer_certificates WHERE lawyer_id = ?",
        [id]
      ),
      connection.query(
        `
          SELECT f.*
          FROM lawyer_fields lf  
          JOIN field_categories f ON lf.field_category_id = f.id
          WHERE lf.lawyer_id =1 
      `,
        [id]
      ),
      connection.query(
        `
          SELECT le.id, st.name_ko as school_type, ss.name_ko as school_status, le.school_name, le.enrollment_date, le.graduation_date
          FROM lawyer_educations le
          INNER JOIN school_type st ON le.school_type_id = st.id
          INNER JOIN school_status ss ON le.school_status_id = ss.id
          WHERE le.lawyer_id = ?`,
        [id]
      ),
      connection.query(
        `
          SELECT *
          FROM lawyer_careers
          WHERE lawyer_id = ?
        `,
        [id]
      ),
      connection.query(
        `
      SELECT * FROM lawyer_broadcasts WHERE lawyer_id = ?`,
        [id]
      ),
      connection.query(
        `
      SELECT * FROM lawyer_articles WHERE lawyer_id = ?`,
        [id]
      ),
    ]);

    const lawyer = lawyerResult[0][0];
    const offices = officeResult[0];
    const reviews = reviewResult[0];
    const tags = tagResult[0];
    const certificates = certificateResult[0];
    const fields = fieldResult[0];
    const educations = educationsResult[0];
    const careers = careerResult[0];
    const broadcasts = broadcastResult[0];
    const articles = articlesResult[0];

    const data = {
      lawyer,
      offices,
      reviews,
      tags,
      certificates,
      fields,
      educations,
      careers,
      broadcasts,
      articles,
    };

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
