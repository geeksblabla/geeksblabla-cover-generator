import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import dateformat from "dateformat";
import "react-datepicker/dist/react-datepicker.css";
import { socialImage } from "./socialImage";
import "./styles.css";

export default function App() {
  const [src, setSrc] = useState(
    "https://via.placeholder.com/1200x630?text=Loding ...."
  );
  const { register, handleSubmit, setValue, formState, watch } = useForm();
  const selectedDate = watch("date");
  const onSubmit = data => {
    const date = dateformat(data.date, "dddd, mmmm dS, h:MM TT");
    console.log({ ...data, date });
    setSrc(socialImage({ ...data, date }));
  };
  console.log(formState);

  return (
    <div className="App">
      <h1>GeeksBlabla Cover Generator</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          ref={register({ required: true })}
        />
        <select name="type" ref={register({ required: true })}>
          <option value="tech">Tech</option>
          <option value="mss">MSS</option>
        </select>

        <DatePicker
          className="picker"
          ref={register({ name: "date" })}
          selected={selectedDate || new Date()}
          onChange={date => setValue("date", date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <button type="submit"> Generate </button>
      </form>
      <img src={src} alt="cover" width="100%" />
    </div>
  );
}
