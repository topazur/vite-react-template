import { ServerOptions } from 'vite'

/**
 * Server specific options, e.g. host, port, https...
 */
const server: ServerOptions = {
  host: '0.0.0.0',
  port: 4000,
  open: true,
  https: false,
  proxy: {},
}

export default server
