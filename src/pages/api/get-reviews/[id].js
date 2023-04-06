import { pool } from "../lib/connection";

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  if (!id) {
    return res.status(400).json({ message: "lawyer_id is required" });
  }

  let connection = null;

  try {
    connection = await pool.getConnection();

    // 변호사 리뷰 데이터 조회
    const [reviews] = await connection.query(
      `SELECT id, member_id, rating, review_text FROM lawyer_reviews WHERE lawyer_id = ?`,
      [id]
    );

    // 리뷰 답글 데이터 조회
    const [replies] = await connection.query(
      `SELECT review_id, reply_text FROM lawyer_review_replies WHERE review_id IN (?)`,
      [reviews.map((review) => review.id)]
    );

    // 변호사 리뷰 데이터와 리뷰 답글 데이터를 병합하여 JSON 생성
    const data = reviews.map((review) => ({
      ...review,
      replies: replies
        .filter((reply) => reply.review_id === review.id)
        .map((reply) => reply.reply_text),
    }));

    // Response 전송
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
