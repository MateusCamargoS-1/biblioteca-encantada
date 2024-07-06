interface InputDefaultProps {
    label: string;
    key: string;
    value: string;
    action: (value: string) => void;
  }
  
  function InputDefault({ key, label, value, action }: InputDefaultProps) {
    return (
      <>
        <input
          type="text"
          name={key}
          key={key}
          value={value}
          placeholder={label}
          onChange={(e) => action(e.target.value)}
        />
        <br />
      </>
    );
  }
  export default InputDefault;
  