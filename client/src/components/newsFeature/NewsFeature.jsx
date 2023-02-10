import styles from './newsFeature.module.scss'
import classNames from 'classnames/bind'
import useFetch from '../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag,  faStar} from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating'
import { faStar as starRegular} from '@fortawesome/free-regular-svg-icons';




const cx = classNames.bind(styles)
function NewsFeature(){

  const {data, loading, error, reFetch} = useFetch("pitch/")

  return (
    
    <div>
    <div className={cx('heading-container', 'block sm:flex')}>
      <div className={cx('list-heading')}>
        Tin Tức nổi bật 
        <div className={cx('list-span')}>
          <FontAwesomeIcon className={cx('span-heading')} icon={faFlag}/>
        </div>
      </div>
      <div className={cx('extra-info')}>Xem tất cả</div>
    </div>
    <div className={cx('lists-item',"grid grid-cols-1 gap-4 sm:grid-cols-4")}>
      <div className={cx('item-list')}>
        <img src='https://static-images.vnncdn.net/files/publish/2023/2/6/harry-kane-tottenham-man-city-591.jpg' className={cx('card-img-team')}></img>
        <h3 className={cx('card-title')}>Harry Kane ghi 200 bàn Premier League: Viết kỷ lục bằng trái tim</h3>
        <div className={cx('link-detail')}>Xem chi tiết</div>
      </div>
      <div className={cx('item-list')}>
        <img src='https://static-images.vnncdn.net/files/publish/2023/2/6/messi-galtier-494.jpg' className={cx('card-img-team')}></img>
        <h3 className={cx('card-title')}>Messi quát sếp bự PSG khi vào phòng thay đồ chỉ đạo</h3>
        <div className={cx('link-detail')}>Xem chi tiết</div>
      </div>
      <div className={cx('item-list')}>
        <img src='https://static-images.vnncdn.net/files/publish/2023/2/6/mitoma-821.jpg' className={cx('card-img-team')}></img>
        <h3 className={cx('card-title')}>Mitoma thăng hoa, lộ đối tác ký chuyển nhượng</h3>
        <div className={cx('link-detail')}>Xem chi tiết</div>
      </div>
      <div className={cx('item-list')}>
        <img src='https://static-images.vnncdn.net/files/publish/2023/2/5/rashford-bruno-fernandes-mu-crystal-palace-638.jpg' className={cx('card-img-team')}></img>
        <h3 className={cx('card-title')}>MU vào top 3 Ngoại hạng Anh: Tiếc cho Casemiro</h3>
        <div className={cx('link-detail')}>Xem chi tiết</div>
      </div>
      
    </div>
  </div>

  )
}

export default NewsFeature