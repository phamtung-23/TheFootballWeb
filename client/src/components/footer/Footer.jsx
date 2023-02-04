import styles from './footer.module.scss'
import className from 'classnames/bind'
import {BsFacebook} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {CgMail} from 'react-icons/cg'
import {FaTiktok} from 'react-icons/fa'




const cx = className.bind(styles)

function Footer() {
  return ( 
    <div className={cx('wrapper') }>
      <div className={cx('icon-contact')}>
        <BsFacebook className={cx('icon')}/>
        <GrInstagram className={cx('icon')}/>
        <CgMail className={cx('icon')}/>
        <FaTiktok className={cx('icon')}/>
      </div>
      <div className={cx('title-contact')}>Contact Me!!!</div>
      <div className={cx('skill')}>Skill: ReactJs, NodeJs</div>
    </div>
   );
}

export default Footer;