import { ErrorRequestHandler, Request, Response, NextFunction } from 'express'

export function errorHandler (err:ErrorRequestHandler, req:Request, res:Response, next:NextFunction) {
  console.log(err)
}
