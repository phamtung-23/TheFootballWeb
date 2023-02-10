import styles from './teamList.module.scss'
import classNames from 'classnames/bind'
import useFetch from '../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai'
import { faRankingStar} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";




const cx = classNames.bind(styles)
function TeamList(){

  const {data, loading, error, reFetch} = useFetch(`/teams?name=&address=&check=${false}`)
  return (
    
      <div>
        <div className={cx('heading-container', 'block sm:flex')}>
          <div className={cx('list-heading')}>
            Các Đội Bóng Đang Nổi 
            <div className={cx('list-span')}>
              <FontAwesomeIcon className={cx('span-heading')} icon={faRankingStar}/>
            </div>
          </div>
          <Link to='/teams'>
            <div className={cx('extra-info')}>Xem tất cả</div>
          </Link>
        </div>
        <div className={cx('lists-item',"grid grid-cols-1 gap-4 sm:grid-cols-4")}>
          {loading?"Loading...":(
            <>
              {
                data && data.map((item,index) => (
                  <div key={index} className={cx('item-list')}>
                    <Link to={`/teams/${item._id}`}>
                      <img src={item.logo||'https://qph.cf2.quoracdn.net/main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq'} className={cx('card-img-team')}></img>
                    </Link>
                    <Link to={`/teams/${item._id}`}>
                      <h3 className={cx('card-title')}>{item.name}</h3>
                    </Link>
                    <div className={cx('action', 'flex')}>
                      <AiOutlineLike/> {item.like}
                      <AiOutlineDislike/> {item.dislike}
                    </div> 
                  </div>
                ))
              }
            </>
          )}
         
          
        </div>
      </div>

  )
}

export default TeamList