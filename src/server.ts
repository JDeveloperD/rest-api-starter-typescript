/**
 * @fileoverview serve.ts, Archivo para arrancar el servidor y conectarse a la bd
 *
 * @version     1.0
 * @author      David Sandoval <ing.david1993@gmail.com>
 *
 * History
 * v1.0   -   Creación y configuración inicial
 */

import 'module-alias/register'
import app from './app'
import MongoDB from '@services/databases/mongodb'
import chalk from 'chalk'
import http from 'http'
import https from 'https'
import { readFileSync } from 'fs'
import { HTTPS, HOST, PORT, DOMAIN_NAME_CERT, MONGODB_URI } from '@config/secrets'

/**
 * Inicialización del servidor
 */

if (!HTTPS) {
  http.createServer(app).listen(PORT, () => {
    console.log(`✔️  [SERVER] => ${chalk.bgGreen.black(`${HOST}:${PORT}`)} `)
  })
} else {
  const options = {
    key: readFileSync(`/etc/letsencrypt/live/${DOMAIN_NAME_CERT}/privkey.pem`),
    cert: readFileSync(`/etc/letsencrypt/live/${DOMAIN_NAME_CERT}/cert.pem`),
    ca: readFileSync(`/etc/letsencrypt/live/${DOMAIN_NAME_CERT}/chain.pem`)
  }

  https.createServer(options, app).listen(PORT, () => {
    console.log(`✔️  [SERVER] => ${chalk.bgGreen.black(`${HOST}:${PORT}`)} `)
  })
}

const db = new MongoDB(MONGODB_URI)
