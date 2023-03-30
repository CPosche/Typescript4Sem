import { SetStateAction } from "react";

type props = {
  setName: React.Dispatch<SetStateAction<string>>;
  name: string;
};

const InputComponent: React.FC<props> = ({ setName, name }) => {
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          setName(evt.target.value)
        }
      />
    </div>
  );
};

export default InputComponent;
