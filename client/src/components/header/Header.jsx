import {Link, useNavigate} from 'react-router-dom'
import styles from './header.module.scss'
import className from 'classnames/bind'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {CgProfile} from 'react-icons/cg'
import {FiSettings,FiHelpCircle} from 'react-icons/fi'
import {BiLogOut} from 'react-icons/bi'
// import useFetch from '../../hooks/useFetch'


const cx = className.bind(styles)

function Header({children}) {
  
  const {user, dispatch} = useContext(AuthContext)

  const handbleShow = ()=>{
    let subMenu  = document.getElementById('showToggle')
    subMenu.classList.toggle(cx('open-menu'))
  }
const navigate = useNavigate()
  const handleClickLogout = ()=>{
    dispatch({type:"LOGOUT"})
    navigate('/')
  }
  return ( 
    <header className={cx('wrapper')}>
      <div className={cx('logo')}>
        <Link to="/">
          <img  className={cx('img')} src="https://img3.thuthuatphanmem.vn/uploads/2019/10/01/anh-logo-bong-da_103805455.jpg" alt="F8"/>
        </Link>
        <h4  className='font-bold ml-5 text-3xl hidden  sm:block'>Bóng Đá Phủi</h4>
      </div>
      <div className={cx('search')+' hidden sm:flex'}>
        <div className={cx('icon-search')}></div>
        <input className={cx('input')} spellCheck="false" type="text" placeholder="Tìm kiếm sân bóng, đội bóng, ..." />
      </div>
      <div className={cx('action')}>
        <img className={cx('bell')} alt=''  src='https://icons.veryicon.com/png/o/miscellaneous/fine-fillet-icon/notification-bell.png'/>
        {user ? (
          <div className={cx('user',)}>
            <img className={cx('icon-user')} alt=''  onClick={handbleShow} src={user.icon?user.icon:'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'}/>
            <div className={cx('sub-menu-wrapper')} id='showToggle'>
              <div className={cx('sub-menu')}>
                <div className={cx('user-info')}>
                  <img className={cx('icon-user')} alt=''  src={user.icon?user.icon:'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'}/>
                  <div className={cx('')}>{user.username}</div>
                </div>
                <hr/>
                <div className={cx('sub-menu-list')}>
                  <Link to={`/profile/${user._id}`}>
                    <button className={cx('sub-menu-list-item')}>
                      <CgProfile className={cx('sub-menu-item-icon')}/>
                      <div className={cx('sub-menu-item-text')}>Thông tin các nhân</div>
                    </button>
                  </Link>
                  <button className={cx('sub-menu-list-item')}>
                    <FiSettings className={cx('sub-menu-item-icon')}/>
                    <div className={cx('sub-menu-item-text')}>Cài đặt</div>
                  </button>
                  <button className={cx('sub-menu-list-item')}>
                    <FiHelpCircle className={cx('sub-menu-item-icon')}/>
                    <div className={cx('sub-menu-item-text')}>Trợ giúp</div>
                  </button>
                </div>
                <hr/>
                <button className={cx('sub-menu-list-item')}>
                  <BiLogOut className={cx('sub-menu-item-icon')}/>
                  <div className={cx('sub-menu-item-text')} onClick={handleClickLogout}>Đăng xuất</div>
                </button>
              </div>
            </div >
          </div>
          ):(
          <Link to='/login'>
            <button className='border-solid border-2 rounded-lg p-3 border-indigo-600 hover:bg-violet-600 hover:text-white m-3'>Đăng nhập</button>
          </Link>
        )}
      </div>
    </header>
   );
}

export default Header;