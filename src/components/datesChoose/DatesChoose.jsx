import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation, useNavigate, useHistory } from 'react-router-dom';
import './datesChoose.scss';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import qs from 'qs';


// const DatesChoose = ({ getFlightsList }) => {
//   const { search } = useLocation();
//   const [direction, setDirection] = useState('');
//   // const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
//   const [date, setDate] = useState();
//   const dispatch = useDispatch();

//   const [searchValue, setSearchValue] = useState('');

//   const navigate = useNavigate();

//   const dateChangeHandler = date => {
//     const formatedDate = moment(date).format('DD-MM-YYYY');
//     setDate(formatedDate);
//     const params = qs.stringify({ date: formatedDate });
//     navigate(`/departures?${params}`);
//     dispatch(getFlightsList(formatedDate));
//   };

//   useEffect(() => {
//     navigate(`/${direction}?date=${date}${searchValue ? `&search=${searchValue}` : ''}`);
//   }, [date, searchValue, direction]);

//   const getToday = moment(new Date()).format('DD/MM/YYYY');
//   const getYesterday = moment(new Date(new Date().setDate(new Date().getDate() - 1))).format(
//     'DD/MM/YYYY',
//   );
//   const getTomorrow = moment(new Date(new Date().setDate(new Date().getDate() + 1))).format(
//     'DD/MM/YYYY',
//   );

//   return (
//     <div>
//       <div className="dates">
//         <span className="date-value">{moment(date).format('DD/MM')}</span>
//         <input
//           onChange={event => dateChangeHandler(event.target.value)}
//           value={date}
//           className="dates__input"
//           type="date"
//         />
//         <div className="dates__day">

//           <div className={getYesterday}
//           onClick={() => dateChangeHandler()}
//           >
//           <span className="dates__day-title" >{getYesterday}</span>
//           <p>YESTERDAY</p>
//           </div>

//         </div>
//         <div className="dates__day">
//           <span className="dates__day-title" onClick={() => dateChangeHandler()}>
//             {getToday}
//           </span>
//           <p>TODAY</p>
//         </div>
//         <div className="dates__day">
//           <span className="dates__day-title" onClick={() => dateChangeHandler()}>
//             {getTomorrow}
//           </span>
//           <p>TOMORROW</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DatesChoose;

const ChooseDate = (getFlightsList) => {
  const [calendarDay, setCalendarDay] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { search } = useLocation();
  const params = qs.parse(search.substring(1));

  const yesterday = moment().subtract(1, 'd');
  const today = moment();
  const tomorrow = moment().add(1, 'd');

  const dateHandler = data => {
    const formatedDay = moment(data).format('DD-MM-YYYY');
    setCalendarDay(formatedDay);

    const queryString = qs.stringify({
      date: formatedDay,
    });

    navigate(`?${queryString}`);
    dispatch(getFlightsList(formatedDay));
  };

  return (
    <div className="dates">
      <div className='calendar'>
      <span className="date-value">{moment(calendarDay).format('DD/MM')}</span>
      <input
        onChange={e => dateHandler(e.target.value)}
        value={calendarDay}
        className="dates__input"
        type="date"
      />
      </div>
      <div className="dates__days">
        <div
          onClick={() => dateHandler(yesterday)}
          className={
            calendarDay == yesterday.format('DD-MM-YYYY') ? 'dates__day active' : 'dates__day'
          }
        >
          <span className="dates__day-title">{yesterday.format('DD/MM')}</span>
          <p>YESTERDAY</p>
        </div>

        <div
          onClick={() => dateHandler(today)}
          className={calendarDay == today.format('DD-MM-YYYY') ? 'dates__day active' : 'dates__day'}
        >
          <span className="dates__day-title">{today.format('DD/MM')}</span>
          <p>TODAY</p>
        </div>

        <div
          onClick={() => dateHandler(tomorrow)}
          className={
            calendarDay == tomorrow.format('DD-MM-YYYY') ? 'dates__day active' : 'dates__day'
          }
        >
          <span className="dates__day-title">{tomorrow.format('DD/MM')}</span>
          <p>TOMORROW</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseDate;

