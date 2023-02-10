import styles from './search.module.scss'
import classNames from 'classnames/bind';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';

const cx = classNames.bind(styles)

function Search( {type} ) {
 const [name, setName] = useState();
 const [address, setAddress] = useState();
 const [min, setMin] = useState(undefined);
 const [max, setMax] = useState(undefined);

 const handleClick = () => {
  
 }
  return ( 
    <div className={cx('search-main')}>
      <span className={cx('title-main')}>Tìm kiếm theo</span>
      {type==='sanBong'?(
      <>
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
      </>
      ):(
        <>
          <div className={cx('item-search')}>
            <label className={cx('title')}>Tên đội bóng</label>
            <input className={cx('input-box')} type="text" placeholder="Nhập tên đội bóng..."/>
          </div>
          <div className={cx('item-search-checkbox')}>
            <label className={cx('title')}>Đang tuyển</label>
            <input className={cx('input-box-checkbox')} type="checkbox" />
          </div>
          <div className={cx('item-search')}>
            <label className={cx('title')}>Địa điểm</label>
            <input className={cx('input-box')} type="text" placeholder="Nhập địa điểm..."/>
          </div>
        </>
      )}
      
      <button className={cx('btnSearch')} onClick={handleClick}>Tìm Kiếm</button>
    </div>
  );
}

export default Search;