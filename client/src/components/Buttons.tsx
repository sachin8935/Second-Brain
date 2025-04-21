interface ButtonProps{
    variant:"primary"|"secondary";
    size:"sm"|"md"|"lg";
    text:String;
    startIcon?:any;
    endIcon?:any;
    onClick?:()=>void;
}
const variantStyle={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-500"
}
const sizeStyle={
    "sm": "px-2 py-2",
    "md": "px-4 py-4",
    "lg": "px-6 py-6"
}
const defaultStyle="rounded-md p-4"
export const Button =(props:ButtonProps)=>{
    return(
        <button className={`${variantStyle[props.variant]}${sizeStyle[props.size]} ${defaultStyle} `}> {props.startIcon && <span>{props.startIcon}</span>}{props.text}</button>
    )
}