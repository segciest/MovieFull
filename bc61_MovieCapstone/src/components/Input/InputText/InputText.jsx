const InputText = ({
  label,
  name,
  className,
  placeholder,
  handleChange,
  handleBlur,
  type = 'text',
  error,
  touched,
  autoComplete = 'off',
  value,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        // giá trị name nhận vào sẽ tương ứng với thuộc tính cần lấy dữu liệu tên innitalvalues
        name={name}
        //   handleChange là phương thức lấy dữ liệu cho formik
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        //   id="taiKhoan"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        // thuộc tính required giúp check ng dùng có nhậpf vào hay chưa
      />
      {/* Nếu người dùng đã bấm vào input và có lỗi thì mới hiện thông báo lỗi lên và việc kiểm tra xem người dùng bấm vào input hay chưa sẽ được formik.touched quản lí  */}

      {touched && error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputText;
