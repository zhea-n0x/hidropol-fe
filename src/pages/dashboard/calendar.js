import IsAuth from "../../middleware/isAuth";

const Calendar = () => {
  return <h1>Welcome to Calendar, Adam!</h1>;
};

export default IsAuth(Calendar);
