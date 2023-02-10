import Search from '../../components/search/Search';
import styles from './teams.module.scss'
import classNames from 'classnames/bind';
import {BsCheckLg, BsThreeDots} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import {BiSearchAlt} from 'react-icons/bi'
import { useState } from 'react';


const cx = classNames.bind(styles)

function Teams() {
  const [nameTeam, setNameTeam] = useState('')
  const [addressTeam, setAddressTeam] = useState('')
  const [isRecruit, setIsRecruit] = useState(false)
  const [isFullMember, setIsFullMember] = useState(false)

  const {data, loading, error, reFetch} = useFetch(`/teams?name=${nameTeam}&address=${addressTeam}&recruit=${isRecruit}&member=${isFullMember}`)

  const handleClick = () => {
    reFetch()
  }

  return (
    <div className={cx('wrapper','block sm:flex w-full ')}>
      <div className={cx('search-teams',' w-full sm:w-1/4')}>
        {/* <Search type={'teams'}/> */}
        <div className={cx('search-main')}>
          <span className={cx('title-main')}>Tìm Đội</span>
          <div className={cx('item-search')}>
            <label className={cx('title')}>Tên đội bóng</label>
            <input className={cx('input-box')} type="text" onChange={e=>{setNameTeam(e.target.value)}} placeholder="Nhập tên đội bóng..."/>
          </div>
          <div className={cx('item-search-checkbox')}>
            <label className={cx('title')}>Đang tuyển</label>
            <input className={cx('input-box-checkbox')} onChange={e=>{setIsRecruit(e.target.checked)}} type="checkbox" />
          </div>
          <div className={cx('item-search-checkbox')}>
            <label className={cx('title')}>Đã đủ thành viên</label>
            <input className={cx('input-box-checkbox')} onChange={e=>{setIsFullMember(e.target.checked)}} type="checkbox" />
          </div>
          <div className={cx('item-search')}>
            <label className={cx('title')}>Địa điểm</label>
            <input className={cx('input-box')} type="text" onChange={e=>{setAddressTeam(e.target.value)}} placeholder="Nhập địa điểm..."/>
          </div>
          <button className={cx('btnSearch',"flex")} onClick={handleClick}><BiSearchAlt/>  Tìm Kiếm</button>
        </div>
      </div>
      <div className={cx('content','w-full p-4 sm:w-3/4')}>
        <h2 className={cx('title-main-list')}>Danh sách Đội bóng</h2>
        <div className={cx('lists-team','grid grid-cols-1 gap-4 sm:grid-cols-2')}>
          {loading?"Loading...":(
            <>
              {
                data.map((item, index) => (
                  <div key={index} className={cx('wrapper-list')}>
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
                          <div className={cx('title-body')}>
                            <Link to={`/teams/${item._id}`}>
                              {item.name}
                            </Link>
                            </div>
                          <div className={cx('time-body')}>Trạng thái tuyển: {item.isRecruit?"Còn tuyển":"Đủ thành viên"}</div>
                        </div>
                      </div>
                      <div className={cx('img-content')}>
                        <Link to={`/teams/${item._id}`}>
                          <img src={item.logo}/>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Teams;