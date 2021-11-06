import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', function (req: Request, res: Response): Response {
  return res.json('todos los usuarios')
})

export default router
