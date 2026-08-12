import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import { contactRouter } from './routes/contact.js'
import { admissionsRouter } from './routes/admissions.js'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 3010)
const origins = (process.env.CORS_ORIGINS || 'http://localhost:5174,http://127.0.0.1:5174')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean)

app.use(helmet({ contentSecurityPolicy: false }))
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || origins.includes(origin)) callback(null, true)
      else callback(new Error('Not allowed by CORS'))
    },
  }),
)
app.use(express.json({ limit: '32kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'tss-website-api' })
})

app.use('/api/contact', contactRouter)
app.use('/api/admissions', admissionsRouter)

app.listen(port, () => {
  console.log(`[tss-website-api] listening on http://127.0.0.1:${port}`)
})
