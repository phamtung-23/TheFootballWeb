import styles from './pitchList.module.scss'
import classNames from 'classnames/bind'
import useFetch from '../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai'
import { faCrown} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";


const cx = classNames.bind(styles)
function PitchList(){
  
  const {data, loading, error, reFetch} = useFetch(`/pitch?name=&address=&min=${0}&max=${1000000}`)

  return (
    
      <div>
        <div className={cx('heading-container', 'block sm:flex')}>
          <div className={cx('list-heading')}>
            Sân Bóng Nổi Bật 
            <div className={cx('list-span')}>
              <FontAwesomeIcon className={cx('span-heading')} icon={faCrown}/>
            </div>
          </div>
          <Link to='/pitch'>
            <div className={cx('extra-info')}>Xem tất cả</div>
          </Link>
        </div>
        <div className={cx('lists-item',"grid grid-cols-1 gap-4 sm:grid-cols-4")}>
          
          {loading? "Loading...":(
            <>
              {
                data && data.map((item,index)=>(
                  <div key={index} className={cx('item-list')}>
                    <Link to={`/pitch/${item._id}`}>
                      <img src={item.photo? item.photo[0]:'https://i.pinimg.com/564x/30/79/0d/30790dc25ece858864132f0e8dd26dde.jpg'} className={cx('card-img')}></img>
                    </Link>
                    <div className={cx('title','flex')}>
                      <Link to={`/pitch/${item._id}`}>
                        <h3 className={cx('card-title')}>{item.name}</h3>
                      </Link>
                      <h6 className={cx('')}>Giá: {item.price}/h</h6>
                    </div>
                    <div className={cx('action', 'flex')}>
                      <AiOutlineLike/> 100K
                      <AiOutlineDislike/> 120
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

export default PitchList