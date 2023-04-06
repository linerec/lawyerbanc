import { pool } from "../lib/connection";

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  try {
    const reviews = await query(
      `
      SELECT * FROM lawyer_reviews
      WHERE lawyer_id = ?
      `,
      [id]
    );

    const reviewReplies = await query(
      `
      SELECT r.*, lrr.lawyer_id FROM lawyer_review_replies r
      INNER JOIN lawyer_reviews lr ON lr.id = r.review_id
      INNER JOIN lawyer_review_replies lrr ON lr.id = lrr.review_id
      WHERE lr.lawyer_id = ?
      `,
      [id]
    );

    const reviewData = reviews.map((review) => {
      const replies = reviewReplies
        .filter((reply) => reply.review_id === review.id)
        .map((reply) => ({
          lawyerId: reply.lawyer_id,
          replyText: reply.reply_text,
        }));

      return {
        id: review.id,
        reviewerId: review.reviewer_id,
        rating: review.rating,
        reviewText: review.review_text,
        replies,
      };
    });

    res.status(200).json({ reviewData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
