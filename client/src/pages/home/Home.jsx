import styles from './home.module.scss'
import className from 'classnames/bind'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



import useFetch from '../../hooks/useFetch.js';
import PitchList from '../../components/pitchList/PitchList';
import TeamList from '../../components/teamList/TeamList';
import NewsFeature from '../../components/newsFeature/NewsFeature';

const cx = className.bind(styles)

function Home() {
  const slideImages = [
    {
      url: 'https://b-f8-zpcloud.zdn.vn/7229401522235526257/37758cbeb0196b473208.jpg',
      caption: ''
    },
    {
      url: 'https://f9-zpcloud.zdn.vn/8522906649058458957/55f6e63cda9b01c5588a.jpg',
      caption: ''
    },
    {
      url: 'https://f9-zpcloud.zdn.vn/2122572892330146155/641542a17e06a558fc17.jpg',
      caption: ''
    },
   
  ];

 const {data, loading, error, reFetch} = useFetch("pitch/")

  return ( 
    <>
      <div className={cx('wrapper')}>
        <div className={cx('slide-show')}>
          <Slide>
            {slideImages.map((slideImage, index)=> (
                <div className={cx("each-slide")} key={index}>
                  <img key={index} className={cx("img",'h-100 w-max sm:w-3/4')} src={slideImage.url}/>
                </div>
              ))} 
          </Slide>
        </div>
        {/* sân bóng nổi bật */}
        <div className={cx('home-wrapper')}>
          <PitchList/>
        </div>

        {/* đội bóng nổi bật */}
        <div className={cx('home-wrapper')}>
          <TeamList/>
        </div>
        {/* Tin tức nổi bật */}
        <div className={cx('home-wrapper')}>
          <NewsFeature/>
        </div>
      </div>
    </>
   );
}

export default Home;