import 'dotenv/config'

export const config = {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  db_name: process.env.DB_NAME,
}
