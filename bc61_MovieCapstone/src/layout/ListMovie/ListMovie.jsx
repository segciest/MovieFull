import React, { useEffect, useState } from 'react';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import { useDispatch, useSelector } from 'react-redux';
import './listMovie.scss';
import { getMovieAsyncThunk } from '../../redux/slice/phimSlice';
const ListMovie = () => {
  const dispatch = useDispatch();
  // const [arrMovie, setArrMovie] = useState([]);
  const { arrMovie } = useSelector(state => state.phimSlice);
  useEffect(() => {
    dispatch(getMovieAsyncThunk('1'));
    // quanLyPhimServ
    //   .layDanhSachPhim()
    //   .then(res => {
    //     console.log(res);
    //     setArrMovie(res.data.content);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div className="list_movie">
      <div className="container">
        <div className="list_movie_content">
          {arrMovie.map((item, index) => {
            return (
              <div className="space-y-2" key={index}>
                <img
                  className="h-96 w-full object-cover"
                  src={item.hinhAnh}
                  alt={item.biDanh}
                />
                <h3 className="line-clamp-2">
                  <span className="text-white bg-orange-500 rounded p-1">
                    C18
                  </span>
                  <span className="ml-2 font-medium text-xl">
                    {item.tenPhim}
                  </span>
                </h3>
                <p className="line-clamp-2">{item.moTa}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListMovie;
