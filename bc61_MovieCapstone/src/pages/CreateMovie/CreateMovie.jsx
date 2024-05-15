import { useState } from 'react';
import InputText from './../../components/Input/InputText/InputText';
import { DatePicker, Rate, Switch } from 'antd';
import { useFormik } from 'formik';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';

const CreateMovie = () => {
  const [image, setImage] = useState('');
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      maNhom: 'GP01',
      ngayKhoiChieu: '',
      sapChieu: true,
      dangChieu: true,
      hot: true,
      danhGia: 0,
      hinhAnh: '',
    },
    onSubmit: values => {
      console.log(values);
      // tạo đối tượng formData để nhận dữ liệu từ values và đẩy lên backEnd
      const formData = new FormData();
      // Thực hiện sử dụng vòng lặp forIn để truyền dữ liệu vào formData
      for (let key in values) {
        if (key == 'hinhAnh') {
          formData.append('File', values[key]);
        } else {
          formData.append(key, values[key]);
        }
      }
      quanLyPhimServ
        .themPhimUploadHinh(formData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // validationSchema: {},
  });
  return (
    <div>
      <h1 className="text-2xl font-bold">Trang tạo phim</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <InputText
            label="Tên phim"
            placeholder="nhập tên phim"
            name="tenPhim"
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched.tenPhim}
            error={errors.tenPhim}
            value={values.tenPhim}
          />
          <InputText
            label="Trailer"
            placeholder="Nhập trailer"
            name="trailer"
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched.trailer}
            error={errors.trailer}
            value={values.trailer}
          />
          <div className="flex justify-between col-span-2">
            {/* Ngày khởi chiếu */}
            <div>
              <label htmlFor="" className="block mb-2">
                Ngày khởi chiếu
              </label>
              {/* Về nhà validation dữ liệu của date picker nếu người dùng chọn ngày trong quá khứ sẽ báo lỗi */}
              <DatePicker
                format="DD-MM-YYYY"
                onChange={(date, dateString) => {
                  console.log(date);
                  console.log(dateString);
                  setFieldValue('ngayKhoiChieu', dateString);
                }}
              />
            </div>
            {/* Đang chiếu */}
            <div>
              <label htmlFor="" className="block mb-2">
                Đang chiếu
              </label>
              <Switch
                onChange={(checked, event) => {
                  console.log(checked);
                  setFieldValue('dangChieu', checked);
                }}
                value={values.dangChieu}
              />
            </div>
            {/* Sắp chiếu */}
            <div>
              <label htmlFor="" className="block mb-2">
                Sắp chiếu
              </label>
              <Switch
                onChange={(checked, event) => {
                  setFieldValue('sapChieu', checked);
                }}
                value={values.sapChieu}
              />
            </div>
            {/* Hot */}
            <div>
              <label htmlFor="" className="block mb-2">
                Hot
              </label>
              <Switch
                onChange={(checked, event) => {
                  setFieldValue('hot', checked);
                }}
                value={values.hot}
              />
            </div>
            {/* Đánh giá */}
            <div>
              <label htmlFor="" className="block mb-2">
                Đánh giá
              </label>
              <Rate
                allowHalf
                onChange={value => {
                  console.log(value);
                  setFieldValue('danhGia', value * 2);
                }}
              />
            </div>
          </div>
          {/* Mô tả */}
          <div className="col-span-2">
            <label htmlFor="" className="block">
              Mô tả
            </label>
            <textarea
              onChange={handleChange}
              name="moTa"
              id=""
              cols="30"
              rows="10"
              className="border border-gray-300 w-full"
            ></textarea>
          </div>
          {/* File */}
          <div>
            <label htmlFor="">Hình ảnh phim</label>
            <img className="w-40" src={image} alt="" />
            <button>X</button>
            {/* tạo nút X để người dùng xoá img đi = setImage('') */}
            <input
              name="hinhAnh"
              onChange={event => {
                console.log(event.target.files[0]);
                const img = event.target.files[0];
                // Tạo ra đường dẫn cho tấm hình
                if (img) {
                  const urlImg = URL.createObjectURL(img);
                  setImage(urlImg);
                  setFieldValue('hinhAnh', img);
                }
              }}
              type="file"
              accept="image/*"
            />
          </div>
          {/* button thêm phim */}
          <div>
            <button
              type="submit"
              className="px-2 py-5 bg-violet-500 rounded text-white"
            >
              Thêm phim
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateMovie;
