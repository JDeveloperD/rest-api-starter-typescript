/**
 * @fileoverview secrets.ts, declaración de las contantes globales
 *
 * @version     1.0
 * @author      David Sandoval <ing.david1993@gmail.com>
 *
 * History
 * v1.0   -   creación del archivo y registro de variables
 */

import fs from 'fs'
import dotenv from 'dotenv'

/**
 * Si existe el archivo .env
 * cargamos la configuración del archivo .env
 * caso contrario obtenemos la configuracion de .env.example
 */
if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' })
} else {
  dotenv.config({ path: '.env.example' })
}

/**
 * Obtenemos eL environment
 */
export const ENVIRONMENT = process.env.NODE_ENV
const isProduction = ENVIRONMENT === 'production'

/**
 * Configuración del host
 */
export const PORT = process.env.PORT || 3000
export const HOST = process.env.HOST
export const HTTPS = process.env.HTTPS ? true : false
export const DOMAIN_NAME_CERT = process.env.DOMAIN_NAME_CERT

/**
 * Bases de datos
 */
export const MONGODB_URI: string = process.env.MONGODB_URI || ''

if (!MONGODB_URI) {
  throw new Error('No mongo connection string. Set MONGODB_URI environment variable.')
}

/**
 * Constantes de Jsonwebtokens
 */
export const SESSION_SECRET = process.env.SESSION_SECRET
export const SESSION_EXPIRE_IN = process.env.SESSION_EXPIRE_IN

if (!SESSION_SECRET) {
  throw new Error('No client secret. Set SESSION_SECRET environment variable.')
}

/**
 * Información a mostrar de la Api
 */
export const API_INFO = {
  title: 'Rest api starter',
  baseUri: `${HOST}:${PORT}/api/v1`,
  author: 'David Sandoval <ing.david1993@gmail.com>',
  version: '1.0.0',
  description: 'This is an initial architecture to start with an api-res, it is not official, https://github.com/goldbergyoni/nodebestpractices/blob/spanish-translation/README.spanish.md'
}
