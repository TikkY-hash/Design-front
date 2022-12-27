import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { getTours, sendTours } from "../../store/slices/natoursThunks";
import { fetchAuthLogout } from "../../store/slices/userThunks";
import { tours } from "../../store/userSelectors/natoursSelectors";
import { authLoginToken } from "../../store/userSelectors/userSelectors";
import FormButton from "../../UI/FormButton";
import FormsWrapper from "../../UI/FormsWrapper";

import ProfileTitle from "./components/ProfileTitle";

import peopleImage from "./Image.png";

import s from "./Profile.module.scss";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useSelector(authLoginToken);
  const currentTours = useSelector(tours);

  const [name, setName] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [maxGroupSize, setMaxGroupSize] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [summary, setSummary] = React.useState("");

  React.useEffect(() => {
    if (!token) navigate("/");
  }, [token]);

  React.useEffect(() => {
    dispatch(getTours());
  }, []);

  const logOutHandler = () => dispatch(fetchAuthLogout());

  const sendNewTour = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      sendTours({
        name,
        duration: +duration,
        maxGroupSize: +maxGroupSize,
        difficulty,
        price: +price,
        summary,
      })
    );
  };

  return (
    <FormsWrapper size="big">
      <main className={s.ProfileWrapper}>
        <ProfileTitle />
        <div className={s.ToursWrapper}>
          {currentTours.tours.map((tour) => (
            <div className={s.ProfileNotification} key={tour._id}>
              <p>Title : {tour.name}</p>
              <p>Price : {tour.price}</p>
              <p>Owner : {tour.owner?.email}</p>
              <p>Duration : {tour.duration}</p>
              <p>Difficulty : {tour.difficulty}</p>
            </div>
          ))}
        </div>
        <form className={s.ProfileAddTour} onSubmit={sendNewTour}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="duration"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          />
          <input
            type="text"
            placeholder="maxGroupSize"
            value={maxGroupSize}
            onChange={(event) => setMaxGroupSize(event.target.value)}
          />
          <input
            type="text"
            placeholder="difficulty"
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
          />
          <input
            type="text"
            placeholder="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <input
            type="text"
            placeholder="summary"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
          />
          <FormButton title="Add tour" />
        </form>
        <div className={s.ButtonWrapper}>
          <FormButton title="Log Out" onClick={logOutHandler} />
        </div>
        <div className={s.ImageWrapper}>
          <img src={peopleImage} />
        </div>
      </main>
    </FormsWrapper>
  );
};

export default Profile;
