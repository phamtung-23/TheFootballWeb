import {Link} from 'react-router-dom'
import styles from './header.module.scss'
import className from 'classnames/bind'


const cx = className.bind(styles)

function Header({children}) {
  
  return ( 
    <header className={cx('wrapper')}>
      <div className={cx('logo')}>
        <Link to="/">
          <img  className={cx('img')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rrfXhBFBi8VOnvwDrC24h2LJU55UHGpieQ&usqp=CAU" alt="F8"/>
        </Link>
        <h4  className='font-bold ml-5 text-3xl hidden  sm:block'>Thế giới bóng đá</h4>
      </div>
      <div className={cx('search')+' hidden sm:flex'}>
        <div className={cx('icon-search')}></div>
        <input className={cx('input')} spellCheck="false" type="text" placeholder="Tìm kiếm sân bóng, đội bóng, ..." />
      </div>
      <div className={cx('action')}>
        <img className={cx('bell')} src='https://icons.veryicon.com/png/o/miscellaneous/fine-fillet-icon/notification-bell.png'/>
        <img className={cx('account')} src='https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'/>
        <button className='border-solid border-2 rounded-lg p-3 border-indigo-600 hover:bg-violet-600 hover:text-white m-3'>Đăng nhập</button>
      </div>
    </header>
   );
}

export default Header;