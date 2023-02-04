

import styles from './detailSan.module.scss'
import className from 'classnames/bind'
import {GoLocation} from 'react-icons/go'
import {GrContactInfo} from 'react-icons/gr'
import {  useLocation, useNavigate } from "react-router-dom";
import useFetch from '../../hooks/useFetch';


const cx = className.bind(styles)

function DetailSan() {
  const location = useLocation()
  const id  = location.pathname.split("/")[2]

  const {data, loading, error, reFetch} = useFetch(`/pitch/${id}`)

  return ( 
    <div className={cx('wrapper')}>
      <div className={cx('main','w-full sm:w-3/4')}>
        <div className={cx('header')}>
          <div className={cx('title')}>
            {data.name}
            <button className={cx('btnDatSan')}>Đặt sân</button>
          </div>
          <div className={cx('location')}>
            <GoLocation/>{data.address}
          </div>
          <div className={cx('contact')}>
            <GrContactInfo/>
            Liên Lạc: {data.phone}
            </div>
        </div>

        <div className={cx('detail')}>
          <div className={cx('detail-title')}>
            Mô tả - thông tin kèm theo
          </div>
          <div className={cx('detail-content')}>{data.description}</div>
        </div>
        <div className={cx('detail')}>
          <div className={cx('detail-title')}>Bản đồ</div>
          <img src='https://s1.topvietnam.com/maps/vietnam/be131b/27-29-31-%C4%91%C6%B0%E1%BB%9Dng-9A,Huy%E1%BB%87n-B%C3%ACnh-Ch%C3%A1nh,H%E1%BB%93-Ch%C3%AD-Minh,Vi%E1%BB%87t-Nam.png' className={cx('map-content')}/>
        </div>
        <div className={cx('detail')}>
          <div className={cx('detail-title')}>Hình ảnh</div>
          <div className={cx('images-list','grid grid-cols-1 sm:grid-cols-2 gap-4')}>
            <img src='https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-Hieu-Hoang-Long.jpg'/>
            <img src='https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-Hieu-Hoang-Long.jpg'/>
            <img src='https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-Hieu-Hoang-Long.jpg'/>
            <img src='https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-Hieu-Hoang-Long.jpg'/>
            <img src='https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-Hieu-Hoang-Long.jpg'/>
            <img src='https://top10tphcm.com/wp-content/uploads/2020/12/san-bong-da-Hieu-Hoang-Long.jpg'/>
          </div>
        </div>
      </div>
    </div>
   );
}

export default DetailSan
