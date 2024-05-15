import { useEffect } from 'react';
import { Tabs } from 'antd';
import { useState } from 'react';
import { quanLyRapServ } from '../../services/quanLyRapServ';
import './heThongCumRap.scss';
import moment from 'moment';

const HeThongCumRap = ({ maHeThongRap }) => {
  const [cumRap, setCumRap] = useState([]);
  const [tabPosition, setTabPosition] = useState('left');
  useEffect(() => {
    quanLyRapServ
      .layThongTinLichChieuHeThongRap(maHeThongRap)
      .then(res => {
        console.log(res);
        setCumRap(res.data.content[0].lstCumRap);
      })
      .catch(err => {
        console.log(err);
      });
  }, [maHeThongRap]);

  return (
    <div className="heThongCumRap">
      <div className="container">
        <Tabs
          style={{ height: '600px' }}
          tabPosition={tabPosition}
          items={cumRap?.map((cumRap, index) => {
            return {
              label: (
                <div key={index} className="text-left w-[250px]">
                  <h3 className="uppercase text-green-500 font-medium truncate">
                    {cumRap.tenCumRap}
                  </h3>
                  <p className="truncate text-xs text-gray-400">
                    {cumRap.diaChi}
                  </p>
                </div>
              ),
              //   key: cumRap.maCumRap,
              key: index,
              children: (
                <div className="overflow-y-scroll h-full">
                  {cumRap.danhSachPhim.map((phim, index) => {
                    return (
                      phim.dangChieu && (
                        <div key={index} className="flex my-5 ml-5">
                          {/* Hình Ảnh */}
                          <div className="mr-5">
                            <img
                              className="h-40 w-40 object-cover"
                              src={phim.hinhAnh}
                              alt=""
                            />
                          </div>
                          {/* Thông tin phim */}
                          <div>
                            {/* Tên phim */}
                            <h3>
                              <span className="text-white bg-orange-500 px-2 py-1 rounded mr-2">
                                C18
                              </span>
                              <span className="text-xl font-medium">
                                {phim.tenPhim}
                              </span>
                            </h3>
                            <div className="grid grid-cols-2 gap-5 mt-4">
                              {phim.lstLichChieuTheoPhim
                                .slice(0, 4)
                                .map((lichChieu, index2) => {
                                  return (
                                    <div
                                      key={index2}
                                      className="py-2 px-5 bg-slate-100 space-x-2 flex items-center rounded hover:scale-110"
                                    >
                                      <span className="text-green-400">
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format('DD-MM-YYYY')}
                                      </span>

                                      <span className="text-red-400">
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format('hh:mm')}
                                      </span>
                                      <span className="text-white bg-violet-500 px-2 py-1 rounded">
                                        {lichChieu.tenRap}
                                      </span>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      )
                    );
                  })}
                </div>
              ),
            };
          })}
        />
      </div>
    </div>
  );
};

export default HeThongCumRap;
