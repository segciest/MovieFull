import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { quanLyRapServ } from '../../services/quanLyRapServ';
import './heThongLichChieu.scss';
import HeThongCumRap from '../../components/HeThongCumRap/HeThongCumRap';
const HeThongLichChieu = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const [arrRap, setArrRap] = useState([]);
  useEffect(() => {
    quanLyRapServ
      .layThongTinHeThongRap()
      .then(res => {
        console.log(res);
        setArrRap(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="heThongLichChieu">
      <div className="container">
        <Tabs
          tabPosition={tabPosition}
          items={arrRap.map((rap, index) => {
            return {
              label: <img className="w-16" src={rap.logo} />,
              key: index,
              children: <HeThongCumRap maHeThongRap={rap.maHeThongRap} />,
            };
          })}
          onChange={activeKey => {
            // console.log(activeKey);
            // setMaHeThongRap
          }}
        />
      </div>
    </div>
  );
};

export default HeThongLichChieu;
