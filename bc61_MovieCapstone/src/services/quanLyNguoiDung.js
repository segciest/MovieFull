import { http } from './config';

export const quanLyNguoiDung = {
  dangNhap: data => {
    return http.post('/QuanLyNguoiDung/DangNhap', data);
  },
};
