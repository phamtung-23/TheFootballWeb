import styles from './confirmOTP.module.scss'
import classNames from 'classnames/bind'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import Swal from 'sweetalert2'
import {BiArrowBack} from 'react-icons/bi'
import {Link, useLocation, useNavigate} from 'react-router-dom'
// import useFetch from '../../hooks/useFetch'


const cx = classNames.bind(styles)

export const ConfirmOTP = () => {

  const location = useLocation()
  const id  = location.pathname.split("/")[3]

  // const {data} = useFetch(`/user/confirmOtp/${id}`)

  const [numberOtp,setNumberOtp] = useState({
    otp:undefined
  })

  const navigate = useNavigate()
  const { loading} = useContext(AuthContext)

  const handleChange = (e) => {
    setNumberOtp((prev) => ({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()

    // dispatch({type:"LOGIN_START"})

    try {
      const res = await axios.post(`/auth/confirmOtp/${id}`,numberOtp)
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res.data.message,
        showConfirmButton: false,
        timer: 1500
      })
      navigate('changePass')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: error.response.data.message
      })
    }
  }

  return (
        <div>
          <Link to='/forget'>
            <div className={cx('arrow-back')}>
              <BiArrowBack/>
              <div>Quay lại</div>
            </div>
          </Link>
          <div className={cx('wrapper-img')}>
            <img alt='' className={cx('img-title')} width="200" height="200"src='https://i.pinimg.com/originals/0a/2c/77/0a2c7765f26750536e199749f19cedfd.jpg'/>
          </div>
          <div className={cx('title-login')}>Xác nhận OTP</div>
          <input className={cx('email')} type="text" placeholder="Nhập OTP..." onChange={handleChange} id="otp"/>
          <div className={cx('wrapper-btn')}>
            <button className={cx('btnLogin')} disabled={loading} onClick={handleClick}>Xác nhận</button>
          </div>
        </div>
  )
}
