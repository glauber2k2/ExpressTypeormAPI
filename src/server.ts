import cors from 'cors'
import express from 'express'
import 'reflect-metadata'
import routers from './app/routes/routes'
import { AppDataSource } from './database/data-source'

const app = express()

app.use(cors())

app.use(express.json())

app.use(routers)

AppDataSource.initialize().then(async () => {
  console.log('database OK')
  app.listen(3333, () => {
    console.log('server OK on port 3333')
  })
})
