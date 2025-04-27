interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: () => void;
  }
  
  const variantStyle = {
    primary: "bg-purple-600 text-white flex items-center ",
    secondary: "bg-purple-300 text-purple-500 flex items-center"
  };
  
  const sizeStyle = {
    sm: "px-2 py-2",
    md: "px-4 py-4",
    lg: "px-6 py-6"
  };
  
  const defaultStyle = "rounded-md cursor-pointer flex m-2";
  
  export const Button = (props: ButtonProps) => {
    return (
      <button
        className={`${variantStyle[props.variant]} ${sizeStyle[props.size]} ${defaultStyle}`}
        onClick={props.onClick}
      >
        {props.startIcon && <span>{props.startIcon}</span>}
        {props.text}
        {props.endIcon && <span>{props.endIcon}</span>}
      </button>
    );
  };
  