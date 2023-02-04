import './defaultLayout.module.scss'

import Header from "../../header/Header";
import SideBar from "../../sideBar/SideBar";
import Footer from '../../footer/Footer';
import styles from './defaultLayout.module.scss';
import className from 'classnames/bind'

const cx = className.bind(styles)

function DefaultLayout({children}) {
  return ( 
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Header/>
      </div>
      <div className={cx('side-bar-content')}>
        <div className={cx('side-bar')}>
          <SideBar/>
        </div>
        <div className={cx('content')}>{children}</div>
      </div>
      <div className={cx('footer')}>
        <Footer/>
      </div>
    </div>
   );
}

export default DefaultLayout;