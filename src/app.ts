/**
 * @fileoverview app.ts, configuración de express
 *
 * @version     1.0
 * @author      David Sandoval <ing.david1993@gmail.com>
 *
 * History
 * v1.0   -   creación del archivo y configuración inicial
 */

import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import { routes } from '@routes'

/**
 * Instanciamos Express
 */
const app = express()

/**
 * Middlewares
 */
app.use(helmet())
app.use(morgan('dev'))
app.use(cors({}))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Routes
 */
routes(app)

export default app
