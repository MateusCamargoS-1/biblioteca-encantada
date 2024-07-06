interface ButtonDefaultProps {
    label: string;
    action?: () => void;
    type?: "submit";
    classe?: string;
  }
  
  function ButtonDefault({ label, action, type, classe }: ButtonDefaultProps) {
    return (
      <>
        <button type={type} onClick={action} className={classe}>
          {label}
        </button>
      </>
    );
  }
  
  export default ButtonDefault;
  