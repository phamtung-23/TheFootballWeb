
import styles from './detailTeam.module.scss'
import className from 'classnames/bind'
import {GoLocation} from 'react-icons/go'
import {GrContactInfo} from 'react-icons/gr'
import {  useLocation, useNavigate } from "react-router-dom";
import useFetch from '../../hooks/useFetch';

const cx = className.bind(styles)

function DetailTeam() {
  const location = useLocation()
  const id = location.pathname.split("/")[2]

  const {data, loading, error, reFetch} = useFetch(`/teams/${id}`)

  return ( 
    <div className={cx('wrapper')}>
      <div className={cx('main','w-3/4')}>
        <div className={cx('header','block sm:flex')}>
          <img className={cx('logo')} src={data.logo}/>
          <div className={cx('header-main')}>
            <div className={cx('title','block sm:flex')}>
              {data.name}
              <button className={cx('btnDatSan')}>Tham gia</button>
            </div>
            <div className={cx('location')}>
              <GoLocation/>{data.address}
            </div>
            <div className={cx('contact')}>
              <GrContactInfo/>
              liên hệ: {data.phone}
            </div>
          </div>
        </div>

        <div className={cx('detail')}>
          <div className={cx('detail-title')}>
            Mô tả - thông tin kèm theo
          </div>
          <div className={cx('detail-content')}>{data.description}</div>
        </div>
        <div className={cx('detail')}>
          <div className={cx('detail-title')}>Đồng phục</div>
          <div className={cx('content-uniforms','grid grid-cols-1 sm:grid-cols-2 gap-4 m-5')}>
            <img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3503c0fed6fa4c5f9264ac0900cef4ad_9366/Ao_djau_san_nha_Real_Madrid_20-21_trang_FM4735_01_laydown.jpg' className={cx('map-content')}/>
            <img src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64308bb9adcc4fc68d6eabef00e5a005_9366/Ao_djau_san_khach_Real_Madrid_20-21_Hong_GI6463_01_laydown.jpg' className={cx('map-content')}/>
          </div>
        </div>
        <div className={cx('detail')}>
          <div className={cx('detail-title')}>Danh sánh tên cầu thủ</div>
          <div className={cx('images-list','grid grid-cols-1 sm:grid-cols-2 gap-4')}>
            <div className={cx('name-player')}>Phạm Thanh Tùng</div>
            <div className={cx('name-player')}>Phạm Thanh Tùng</div>
            <div className={cx('name-player')}>Phạm Thanh Tùng</div>
            <div className={cx('name-player')}>Phạm Thanh Tùng</div>
            <div className={cx('name-player')}>Phạm Thanh Tùng</div>
            <div className={cx('name-player')}>Phạm Thanh Tùng</div>
          </div>
        </div>

        <div className={cx('detail')}>
          <div className={cx('detail-title')}>HÌnh ảnh cầu thủ</div>
          <div className={cx('images-list','grid grid-cols-1 sm:grid-cols-4 gap-4')}>
            <img className={cx('images-item')} src='https://i.pinimg.com/564x/19/df/a7/19dfa7c322a2dfb4c07240c521df1e74.jpg'/>
            <img className={cx('images-item')} src='https://i.pinimg.com/564x/ee/ce/ea/eeceea0fbb787b9815f9387006a6fa5c.jpg'/>
            <img className={cx('images-item')} src='https://i.pinimg.com/564x/05/9a/3f/059a3f6d4aa4391d49cbf9f407fcdad0.jpg'/>
            <img className={cx('images-item')} src='https://i.pinimg.com/564x/16/97/3c/16973cd5f1858faa2b0febe75ccdcd8f.jpg'/>
            <img className={cx('images-item')} src='https://i.pinimg.com/564x/51/74/75/51747513203c9ecd311a303e61f6382d.jpg'/>
          </div>
        </div>
      </div>

    </div>
   );
}

export default DetailTeam
