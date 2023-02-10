import {Link, useNavigate} from 'react-router-dom'
import styles from './sideBar.module.scss'
import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faHome, faPeopleGroup, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2'


const cx = className.bind(styles)

function SideBar() {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  // console.log(user)
  const handleClickAdd = () => {
    if(!user){
      Swal.fire({
        icon: 'error',
        text: 'Vui lòng đăng nhập!!!'
      })
      navigate('/login')
    }else{
      navigate(`/add/${user._id}`)
    }
  }
  return ( 
    <div className={cx('wrapper') }>
      <div className={cx('addition')} onClick={handleClickAdd}><FontAwesomeIcon icon={faPlus} /></div>
      <nav className={cx('body')}>
        <ul>
          <li className={cx('side-li')}>
            <Link to="/"><FontAwesomeIcon icon={faHome}/></Link>
            <Link to="/">Trang chủ</Link>
          </li>
          <li className={cx('side-li')}>
            <Link to="/pitch"><FontAwesomeIcon icon={faFutbol}/></Link>
            <Link to="/pitch">Sân bóng</Link>
          </li>
          <li className={cx('side-li')}>
            <Link to="/teams"><FontAwesomeIcon icon={faPeopleGroup}/></Link>
            <Link to="/teams">Teams</Link>
          </li>
        </ul>
      </nav>
    </div>
   );
}

export default SideBar;