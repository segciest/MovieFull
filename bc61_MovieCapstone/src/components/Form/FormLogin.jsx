import React, { useContext } from 'react';
import { useFormik } from 'formik';
import InputText from '../Input/InputText/InputText';
import * as Yup from 'yup';
import { quanLyNguoiDung } from '../../services/quanLyNguoiDung';
import { AlertContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { path } from '../../common/path';
import { handleGetLocalStorage, saveLocalStorage } from '../../utils/util';
import { useDispatch } from 'react-redux';
import { handleGetValue } from '../../redux/slice/userSlice';
const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleAlert } = useContext(AlertContext);
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        taiKhoan: '',
        matKhau: '',
      },
      onSubmit: async values => {
        // Khi sử dụng async await luôn có 1 trycatch bọc lại để bắt các vấn đề về lỗi
        try {
          const res = await quanLyNguoiDung.dangNhap(values);
          console.log(res);
          handleAlert('success', 'Đăng nhập thành công');
          navigate(path.trangChu);
          saveLocalStorage('dataUser', res.data.content);
          dispatch(handleGetValue(res.data.content));
        } catch (error) {
          console.log(error);
          handleAlert('error', error.response.data.content);
        }
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required('Vui lòng không bỏ trống'),
        matKhau: Yup.string().required('Vui lòng không bỏ trống'),
      }),
    });
  return (
    <div className="flex items-center justify-center h-full w-2/3">
      <form onSubmit={handleSubmit} className="space-y-5 w-full">
        <h1>Đăng nhập vào movie</h1>
        <InputText
          name="taiKhoan"
          handleBlur={handleBlur}
          handleChange={handleChange}
          error={errors.taiKhoan}
          touched={touched.taiKhoan}
          placeholder="Vui lòng nhập tài khoản"
          label="Tài Khoản"
          value={values.taiKhoan}
        />
        <InputText
          name="matKhau"
          handleBlur={handleBlur}
          handleChange={handleChange}
          error={errors.matKhau}
          touched={touched.matKhau}
          placeholder="Vui lòng nhập mật khẩu"
          label="Mật Khẩu"
          value={values.matKhau}
          type="password"
        />
        <div>
          <button
            type="submit"
            className="bg-black text-white px-5 py-2 rounded-md w-full text-center"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
