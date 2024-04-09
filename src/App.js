import Checkbox from "./checkbox/Chekbox";
import Dropdown from "./dropdown/Dropdown";
import PlaceHolder from "./placeholder/PlaceHolder";
import RadioButton from "./radio-button/RadioButton";
import Switch from "./switch/Switch";

export const App = () => {
  return (
    <div>
      <Dropdown />
      <Checkbox />
      <RadioButton />
      <Switch />
      <PlaceHolder />
    </div>
  );
};

export default App;
