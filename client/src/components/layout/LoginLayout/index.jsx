import styles from './loginLayout.module.scss'
import classNames from 'classnames/bind'

function LoginLayout({children}) {
  const cx = classNames.bind(styles)
  return (
    <div className={cx('wrapper','block md:flex')}>
      <div className={cx('login-form','w-full md:w-2/6')}>
        {children}
      </div>
      <div className={cx('background','hidden h-screen md:block md:w-4/6')}>
        <img className={cx('img','')} src=''/>
      </div>
    </div>
  )
}

export default LoginLayout
