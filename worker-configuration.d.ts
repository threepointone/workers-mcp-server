// Generated by Wrangler by running `wrangler types`

import { ExampleWorkerMCP } from './src'

interface Env {
  EMAIL_FROM: string
  MCP: Service<ExampleWorkerMCP>
  EMAIL: SendEmail
}
