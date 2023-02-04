import {Link} from 'react-router-dom'
import styles from './sideBar.module.scss'
import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faHome, faPeopleGroup, faPlus } from '@fortawesome/free-solid-svg-icons';


const cx = className.bind(styles)

function SideBar() {
  return ( 
    <div className={cx('wrapper') }>
      <div className={cx('addition')}><FontAwesomeIcon icon={faPlus} /></div>
      <nav className={cx('body')}>
        <ul>
          <li className={cx('side-li')}>
            <FontAwesomeIcon icon={faHome}/>
            <Link to="/">Trang chủ</Link>
          </li>
          <li className={cx('side-li')}>
            <FontAwesomeIcon icon={faFutbol}/>
            <Link to="/pitch">Sân bóng</Link>
          </li>
          <li className={cx('side-li')}>
          <FontAwesomeIcon icon={faPeopleGroup}/>
            <Link to="/teams">Teams</Link>
          </li>
        </ul>
      </nav>
    </div>
   );
}

export default SideBar;