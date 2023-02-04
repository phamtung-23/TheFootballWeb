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
        <img src='https://i.pinimg.com/564x/49/ab/15/49ab15c944c16b0bee2714c97290163c.jpg' className={cx('card-img-team')}></img>
        <h3 className={cx('card-title')}>Messi đến Real Marid...</h3>
        <Rating
          emptySymbol={<FontAwesomeIcon  icon={starRegular}/>}
          fullSymbol={<FontAwesomeIcon icon={faStar}/>}
        />
      </div>
      <div className={cx('item-list')}>
        <img src='https://i.pinimg.com/564x/49/ab/15/49ab15c944c16b0bee2714c97290163c.jpg' className={cx('card-img-team')}></img>
        <h3 className={cx('card-title')}>Messi đến Real Marid...</h3>
        <Rating
          emptySymbol={<FontAwesomeIcon  icon={starRegular}/>}
          fullSymbol={<FontAwesomeIcon icon={faStar}/>}
        />
      </div>
      <div className={cx('item-list')}>
        <img src='https://i.pinimg.com/564x/49/ab/15/49ab15c944c16b0bee2714c97290163c.jpg' className={cx('card-img-team')}></img>
        <h3 className={cx('card-title')}>Messi đến Real Marid...</h3>
        <Rating
          emptySymbol={<FontAwesomeIcon  icon={starRegular}/>}
          fullSymbol={<FontAwesomeIcon icon={faStar}/>}
        />
      </div>
      <div className={cx('item-list')}>
        <img src='https://i.pinimg.com/564x/49/ab/15/49ab15c944c16b0bee2714c97290163c.jpg' className={cx('card-img-team')}></img>
        <h3 className={cx('card-title')}>Messi đến Real Marid...</h3>
        <Rating
          emptySymbol={<FontAwesomeIcon  icon={starRegular}/>}
          fullSymbol={<FontAwesomeIcon icon={faStar}/>}
        />
      </div>
      
    </div>
  </div>

  )
}

export default NewsFeature