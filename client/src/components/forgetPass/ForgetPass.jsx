import styles from './forgetPass.module.scss'
import classNames from 'classnames/bind'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import Swal from 'sweetalert2'
import {BiArrowBack} from 'react-icons/bi'
import {Link, useNavigate} from 'react-router-dom'


const cx = classNames.bind(styles)

export const ForgetPass = () => {
  const [emailConfirm,setEmailConfirm] = useState({
    email:undefined
  })

  const navigate = useNavigate()
  const { loading} = useContext(AuthContext)

  const handleChange = (e) => {
    setEmailConfirm((prev) => ({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    // dispatch({type:"LOGIN_START"})

    try {
      const res = await axios.post('/auth/forget',emailConfirm)
      
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: ' rounded bg-green-600 w-40 h-10 text-white text-2xl ml-2',
          // cancelButton: ' rounded bg-red-800 w-40 h-10 text-white text-2xl mr-2'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        heightAuto:true,
        title: 'Thành Công!',
        text: res.data.message,
        icon: 'success',
        confirmButtonText: 'xác nhận OTP!',
        // cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`confirmOtp/${res.data.updateUser._id}`)
        } 
      })
    } catch (error) {
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
          <div className={cx('title-login')}>Email xác nhận</div>
          <input className={cx('email')} type="text" placeholder="Nhập email..." onChange={handleChange} id="email"/>
          <div className={cx('wrapper-btn')}>
            <button className={cx('btnLogin')} disabled={loading} onClick={handleClick}>Xác nhận</button>
          </div>
        </div>
  )
}
