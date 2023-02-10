import styles from './register.module.scss'
import classNames from 'classnames/bind'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { BiArrowBack } from 'react-icons/bi'

const cx = classNames.bind(styles)

export const Register = () => {
  const [credentials,setCredentials] = useState({
    username:undefined,
    password:undefined,
    email:undefined,
  })

  const { loading} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    // dispatch({type:"LOGIN_START"})

    try {
      const res = await axios.post('/auth/register',credentials)
      // dispatch({type:"LOGIN_SUCCESS", payload:res.data})
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.data.success,
          showConfirmButton: true,
        })
        navigate('/login')
      
      
    } catch (error) {
    // dispatch({type:"LOGIN_FAILURE", payload: error.response.data})
      Swal.fire({
        icon: 'error',
        text: error.response.data.message
      })
    }
  }

  return (
        <div>
          <Link to='/login'>
            <div className={cx('arrow-back')}>
              <BiArrowBack/>
              <div>Quay lại</div>
            </div>
          </Link>
          <div className={cx('wrapper-img')}>
            <img alt='' className={cx('img-title')} width="200" height="200"src='https://i.pinimg.com/originals/0a/2c/77/0a2c7765f26750536e199749f19cedfd.jpg'/>
          </div>
          <div className={cx('title-login')}>Đăng kí tài khoản</div>
          <label>Username</label>
          <input className={cx('username')} type="text" placeholder="Nhập username..." onChange={handleChange} id="username"/>
          <label>Email</label>
          <input className={cx('email')} type="text" placeholder="Nhập email..." onChange={handleChange} id="email"/>
          <label>Password</label>
          <input className={cx('password')} type="password" placeholder="Nhập password..." onChange={handleChange} id="password"/>
          {/* <label>Xác nhận lại Password</label>
          <input className={cx('password')} type="password" placeholder="Nhập lại password..." onChange={handleChange} id="passwordConfirm"/> */}
          <div className={cx('wrapper-btn')}>
            <button className={cx('btnLogin')} disabled={loading} onClick={handleClick}>Tạo tài khoản</button>
          </div>
        </div>
  )
}
