import useRouteCustom from './routes/useRouteCustom';
import { message } from 'antd';
import { createContext } from 'react';
import { Loading } from './components/Loading/Loading';
import { useSelector } from 'react-redux';

export const AlertContext = createContext();
function App() {
  const { isLoading } = useSelector(state => state.loadingSlice);
  console.log(isLoading);
  const [messageApi, contextHolder] = message.useMessage();
  const myRoutes = useRouteCustom();
  const handleAlert = (type, content) => {
    messageApi.open({ type, content });
  };
  return (
    <AlertContext.Provider value={{ handleAlert }}>
      {contextHolder}
      {isLoading && <Loading />}
      {myRoutes}
    </AlertContext.Provider>
  );
}

export default App;
