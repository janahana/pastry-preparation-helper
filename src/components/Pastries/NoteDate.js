import "./NoteDate.css";
// import Card from "../UI/Card"; not working

const NoteDate = (props) => {
  const year = props.date.toLocaleString("zh-TW", {
    year: "numeric"
  });

  const month = props.date.toLocaleString("zh-TW", {
    month: "long"
  });

  const day = props.date.toLocaleString("zh-TW", {
    day: "2-digit"
  });
  return (
    <div className="pastry-log-time">
      <div className="pastry-log-time__year">{year}</div>
      <div className="pastry-log-time__month">{month}</div>
      <div className="pastry-log-time__day">{day}</div>
    </div>
  );
};

export default NoteDate;
