import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import { config } from './app/config'

let server: Server

async function main() {
  const dbConnectionString = `${config.db_url}/${config.db_name}`
  await mongoose.connect(dbConnectionString)
  
  server = app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`)
  })
}

main()
