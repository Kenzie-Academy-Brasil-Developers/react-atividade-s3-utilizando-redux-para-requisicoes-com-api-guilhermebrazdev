import axios from "axios";
// import { useDispatch } from "react-redux";
import { AddDigimon } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((response) => {
      dispatch(AddDigimon(response.data[0]));
      console.log(response.data[0]);
      setError(false);
    })
    .catch((err) => {
      setError(true);
    });
};

export default addDigimonsThunk;
