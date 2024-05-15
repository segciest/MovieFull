import { useRoutes } from 'react-router-dom';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import HomePage from '../pages/HomePage/HomePage';
import { path } from '../common/path';
import Login from '../pages/Login/Login';
import AdminTemplate from '../templates/AdminTemplate/AdminTemplate';
import CreateMovie from '../pages/CreateMovie/CreateMovie';
import ListMovie from '../layout/ListMovie/ListMovie';
import ListUser from '../pages/ListUser/ListUser';
import ListFilm from '../pages/ListFilm/ListFilm';
// đây là một customHook hỗ trợ quản lí các tuyến đường của trang
const useRouteCustom = () => {
  const route = useRoutes([
    {
      path: path.trangChu,
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: path.trangDangNhap,
      element: <Login />,
    },
    {
      path: path.admin.base,
      element: <AdminTemplate />,
      children: [
        {
          index: true,
          element: <CreateMovie />,
        },
        {
          path: path.admin.managerMovie,
          element: <ListFilm />,
        },
        {
          path: path.admin.managerUser,
          element: <ListUser />,
        },
      ],
    },
  ]);
  return route;
};

export default useRouteCustom;
