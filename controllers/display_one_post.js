const { pool } = require("../db/client");

const display_one_post = async (req, res, next) => {
  const { id } = req.params;
  try {
    /* create findbyUser object with query text and respective valeus */
    const findUserById = {
      text: `
    SELECT *
    FROM posts
    WHERE id=$1
    `,
      values: [id],
    };
    const { rows } = await pool.query(findUserById);
    return res.status(200).json(rows[0]);
  } catch (err) {
    console.log(err);
  }
};

module.exports = display_one_post;
