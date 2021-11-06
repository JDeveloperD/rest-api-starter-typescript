/**
 * @fileoverview secrets.ts, registro de las rutas de los componentes
 *
 * @version     1.0
 * @author      David Sandoval <ing.david1993@gmail.com>
 *
 * History
 * v1.0   -   creación del archivo y registro de ruta inicial info Api
 */

import { Application, Router, Request, Response } from 'express'
import { API_INFO } from '@config/secrets'
import routesUser from '@components/users/routes'

export function routes (app:Application) : void {
  const router = Router()

  router.get('/', (req:Request, res:Response) => {
    res.json({ info: API_INFO })
  })

  app.use('/api/v1', router)

  // routes ...
  app.use('/api/v1/users', routesUser)
}
