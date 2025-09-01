import { React, useState, useEffect, useReducer, useCallback } from "react";
import Footer from "../components/footer/Footer";
import BookingForm from "../components/reservation/bookingForm/BookingForm";
import style from "../components/reservation/Reservation.module.css";





const Reservation = () => {
  const [date, setDate] = useState(null);

  const initialAvailableTimesState = {
    date: "",
    availableTimes: [],
  };

  const Reset = () =>{
    setReservation({
      date: "",
      time: "",
      guests: 2,
      occasion: "",
      confirmed: false,
    })
  }

  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    guests: 2,
    occasion: "",
    confirmed: false,
  });


  useEffect(() => {
    if (date && date !== reservation.date) {
      if(reservation.confirmed){
        Reset();
      }
      setReservation((current) => ({ ...current, date: date }));
      updateTimes();
    }
  }, [date, reservation, updateTimes]);

  return (
    <div classname={style.page_container}>
      <main className={style.content_wrap}>
        {!reservation.confirmed && (
          <BookingForm
            availableTimes={availableTimes}
            setReservation={setReservation}
            reservation={reservation}
            createBooking={submitForm}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Reservation;