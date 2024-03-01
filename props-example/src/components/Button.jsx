import "./Button.css"
const Button = (props) => {
    return (
        <div>
            <button className={props.style}>
                {props.showIcon && <span>🎉 </span>}
                {props.text}
            </button>
        </div>
    );
};

export default Button;