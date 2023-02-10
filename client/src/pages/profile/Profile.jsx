import styles from './profile.module.scss'
import classNames from 'classnames/bind'
import {BsFacebook,BsInstagram} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

export const Profile = () => {
  const cx = classNames.bind(styles)

  const location = useLocation()
  const id  = location.pathname.split("/")[2]

  const {data, loading} = useFetch(`/user/${id}`)
  return (
    <div>
      {loading?"Đang tải...":(
        <>
          <input id="slider" className={cx("customSlider")} type="checkbox"/>
          <label for="slider"></label>

          <div className={cx("wrapper")}>
            <div className={cx("top-icons")}>
              <i className={cx("fas fa-long-arrow-alt-left")}></i>
              <i className={cx("fas fa-ellipsis-v")}></i>
              <i className={cx("far fa-heart")}></i>
            </div>

            <div className={cx("profile")}>
              <img alt='' src={data.icon?data.icon:"https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"} className={cx("thumbnail")}/>
              <div className={cx("check")}><i className="fas fa-check"></i></div>
              <h3 className={cx("name")}>{data.username}</h3>
              <p className={cx("title")}>{data.email}</p>
              <p className={cx("description")}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
              <button type="button" className={cx("btn")}>Hire Me</button>
            </div>

            <div className={cx("social-icons")}>
              <div className={cx("icons-wrapper")}>
                <div className={cx("icon")}>
                  <a href="https://www.facebook.com/pham.tung23082001/"><BsFacebook/></a>
                  <p>Facebook</p>
                </div>
      
                <div className={cx("icon")}>
                  <a href="https://www.instagram.com/tung._23/"><BsInstagram/></a>
                  <p>Instagram</p>
                </div>
      
                <div className={cx("icon")}>
                  <a href="https://www.tiktok.com/@phamtung.23"><FaTiktok/></a>
                  <p>Tiktok</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
