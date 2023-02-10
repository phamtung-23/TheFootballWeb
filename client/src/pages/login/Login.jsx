import styles from './login.module.scss'
import classNames from 'classnames/bind'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

export const Login = () => {
  const [credentials,setCredentials] = useState({
    username:undefined,
    password:undefined
  })

  const { loading, error, dispatch} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({type:"LOGIN_START"})

    try {
      const res = await axios.post('/auth/login',credentials)
      dispatch({type:"LOGIN_SUCCESS", payload:res.data})
      navigate('/')
    } catch (error) {
    dispatch({type:"LOGIN_FAILURE", payload: error.response.data})
    }
  }

  return (
    
        <div>
          <div className={cx('wrapper-img')}>
            <img className={cx('img-title')} width="200" height="200"src='https://i.pinimg.com/originals/0a/2c/77/0a2c7765f26750536e199749f19cedfd.jpg'/>
          </div>
          <div className={cx('title-login')}>Đăng nhập tài khoản</div>
          <input className={cx('username')} type="text" placeholder="Nhập username..." onChange={handleChange} id="username"/>
          <input className={cx('password')} type="password" placeholder="Nhập password..." onChange={handleChange} id="password"/>
          {error && <span className={cx('message-err')}>{error.message}</span>}
          <div className={cx('wrapper-btn')}>
            <Link to='/forget'>
              <div className={cx('forgot-pass')}>Quên mật khẩu</div>
            </Link>
            <button className={cx('btnLogin')} disabled={loading} onClick={handleClick}>Đăng Nhập</button>
          </div>
          
          <div className={cx('register')}>
            <div className={cx('content')}> Bạn chưa có tài khoản? </div>
            <Link to='/register'>
              <div className={cx('link')}> Đăng kí ngay</div>  
            </Link>
          </div>
        </div>
  )
}
