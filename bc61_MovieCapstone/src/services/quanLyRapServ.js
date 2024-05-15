import { http } from './config';
// object
export const quanLyRapServ = {
  layThongTinHeThongRap: () => {
    return http.get('/QuanLyRap/LayThongTinHeThongRap');
  },
  layThongTinLichChieuHeThongRap: rap => {
    return http.get(
      `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${rap}&maNhom=GP01`
    );
  },
};
