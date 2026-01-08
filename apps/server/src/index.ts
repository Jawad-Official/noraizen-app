import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Middleware
app.use('/*', cors())

// Health check
app.get('/health', (c) => {
    return c.json({ status: 'ok', message: 'Noraizen API Server' })
})

// API routes
app.get('/api', (c) => {
    return c.json({ message: 'Welcome to Noraizen API' })
})

const port = 3001
console.log(`🚀 Server is running on http://localhost:${port}`)

serve({
    fetch: app.fetch,
    port
})
