const express = require('express');
const path = require('path');
const { createClient } = require('@libsql/client');

const app = express();
const PORT = process.env.PORT || 8080;

const db = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_TOKEN,
});

async function initDb() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS visitors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      visited_at TEXT NOT NULL
    )
  `);
}

app.use(express.static(path.join(__dirname, 'static')));

app.get('/api/count', async (req, res) => {
  try {
    await db.execute(
      `INSERT INTO visitors (visited_at) VALUES (datetime('now'))`
    );
    const result = await db.execute(
      `SELECT COUNT(*) as count FROM visitors`
    );
    res.json({ count: result.rows[0].count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
