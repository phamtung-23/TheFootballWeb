import Search from '../../components/search/Search';
import styles from './teams.module.scss'
import classNames from 'classnames/bind';
import {BsThreeDots} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const cx = classNames.bind(styles)

function Teams() {
  const {data, loading, error, reFetch} = useFetch("/teams")
  const teams = [
    {
      name:'Paris Saint-Germain F.C.',
      imgUrl:'https://i.pinimg.com/564x/6f/a7/73/6fa773a0cfd8e5e639dd1c334033281f.jpg',
    },
    {
      name:'Real Madrid FC',
      imgUrl:'https://i.pinimg.com/564x/5b/81/19/5b8119f252cd1182cf85fe72453b9201.jpg',
    },
    {
      name:'Barcelona FC',
      imgUrl:'https://i.pinimg.com/564x/4d/24/a5/4d24a5ada8743e86eb075342adc7c000.jpg',
    },
    {
      name:'Manchester United FC',
      imgUrl:'https://i.pinimg.com/564x/b9/30/84/b93084c355e7a5b0ea8b69316ae82757.jpg',
    },
    {
      name:'Liverpool FC',
      imgUrl:'https://i.pinimg.com/564x/b0/33/c1/b033c1e388efef133716a5364a056ed9.jpg',
    },
    {
      name:'Manchester City FC',
      imgUrl:'https://i.pinimg.com/564x/09/22/a4/0922a4f6f8f86900f05a99ed29fd6f86.jpg',
    },
    {
      name:'Aletico madrid FC',
      imgUrl:'https://i.pinimg.com/564x/e6/e3/ef/e6e3ef11313f0b8df3a2dec703a7d7de.jpg',
    },
    {
      name:'Arsenal FC',
      imgUrl:'https://i.pinimg.com/564x/88/ec/fc/88ecfcc17e91b01b3e393060b6c4a0ad.jpg',
    },
    
    
  ]
  return (
    <div className={cx('wrapper','block sm:flex w-full ')}>
      <div className={cx('search-teams',' w-full sm:w-1/4')}>
        <Search type={'teams'}/>
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