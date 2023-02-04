import jwt from 'jsonwebtoken'
import { createError } from './error.js'

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token
  if(!token) {return next(createError(401, 'Bạn không xác thực!'))}
  
  jwt.verify(token, process.env.JWT, (err,  user) => {
    if(err) {return next(createError(403, "Token không hợp lệ!"))}
    req.user = user
    next()
  })
}


export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next ,() => {
    if(req.user.id === req.params.id || req.user.isAdmin){
      next()
    }else{
      return next(createError(403, 'Bạn không được ủy quyền!'))
    }
  })
}

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if(req.user.isAdmin){
      next()
    }else{
      return next(createError(403, 'Bạn không được ủy quyền!'))
    }

  })
}