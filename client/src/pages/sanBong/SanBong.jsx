import {Link} from 'react-router-dom'

import styles from './sanBong.module.scss'
import className from 'classnames/bind'
import Search from '../../components/search/Search';
import {BsThreeDots} from 'react-icons/bs'
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi'

const cx = className.bind(styles)

function SanBong() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const {data, loading, error, reFetch} = useFetch(`/pitch?name=${name}&address=${address}&min=${min||0}&max=${max||1000000}`)
  const handleClick = () => {
    reFetch()
  }
  return ( 
    <div className={cx('wrapper', 'block sm:flex w-full')}>
      <div className={cx('search-form','w-full sm:w-1/4')}>
        {/* <Search type={'sanBong'}/> */}
        <div className={cx('search-main')}>
          <span className={cx('title-main')}>Tìm sân</span>
          <div className={cx('item-search')}>
            <label className={cx('title')}>Tên sân</label>
            <input className={cx('input-box')} type="text" onChange={e=>{setName(e.target.value)}} placeholder="Nhập tên sân..."/>
          </div>
          <div className={cx('item-search')}>
            <label className={cx('title')}>Địa điểm</label>
            <input className={cx('input-box')} type="text" onChange={e=>{setAddress(e.target.value)}} placeholder='Nhập địa điểm...'/>
          </div>
          <div className={cx('item-search')}>
            <label className={cx('title')}>Tiền Thuê</label>
            <input className={cx('input-box')} type="number" onChange={e=>{setMin(e.target.value)}} placeholder='Nhập số tiền min...'/>
            <input className={cx('input-box','mt-3')} type="number" onChange={e=>{setMax(e.target.value)}} placeholder='Nhập số tiền max...'/>
          </div>
          <button className={cx('btnSearch',"flex")} onClick={handleClick}><BiSearchAlt/>  Tìm Kiếm</button>

        </div>
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
