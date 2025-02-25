import Banner from '../../layout/Banner/Banner';
import ListMovie from '../../layout/ListMovie/ListMovie';
import HeThongLichChieu from '../../layout/HeThongLichChieu/HeThongLichChieu';
import { handleGetLocalStorage } from '../../utils/util';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ListMovie />
      <HeThongLichChieu />
    </div>
  );
};

export default HomePage;
