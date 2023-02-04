import {Link} from 'react-router-dom'

import styles from './sanBong.module.scss'
import className from 'classnames/bind'
import Search from '../../components/search/Search';
import {BsThreeDots} from 'react-icons/bs'
import useFetch from '../../hooks/useFetch';

const cx = className.bind(styles)

function SanBong() {

  const {data, loading, error, reFetch} = useFetch("/pitch")

  return ( 
    <div className={cx('wrapper', 'block sm:flex w-full')}>
      <div className={cx('search-form','w-full sm:w-1/4')}>
        <Search type={'sanBong'}/>
      </div>
      <div className={cx('search-lists','w-full sm:w-3/4')}>
        <div className={cx('title-list')}>Danh sách sân bóng</div>
        {loading ? "Loading...":(
          <>{data.map((item, i) =>(
            <div key={i} className={cx('wrapper-list')}>
              <div className={cx('header')}>
                <div className={cx('author')}>
                  <img className={cx('img')} src='https://cdn-img.thethao247.vn/storage/files/phucchung/2023/01/08/vua-vo-dich-world-cup-messi-tiep-tuc-nhan-them-vinh-du-dang-tu-hao-trong-su-nghiep-240320.jpg'/>
                  <span className={cx('name-author')}>Phạm Tùng</span>
                </div>
                <div className={cx('action')}>
                  <BsThreeDots/>
                </div>
              </div>
              <div className={cx('body')}>
                <div className={cx('info')}>
                  <div>
                    <Link to={`/pitch/${item._id}`} className={cx('title-body')}>{item.name}</Link>
                    <div className={cx('content-body')}> {item.description}</div>
                    <div className={cx('location-body')}>{item.address}</div>
                    <div className={cx('time-body')}>Giá: {item.price}</div>
                  </div>
                </div>
                <div className={cx('img-content')}>
                  <img src={item.photo[0]}/>
                </div>
              </div>
            </div>
          ))

          }
          </>
        )}
        

      </div>
    </div>
   );
}

export default SanBong
