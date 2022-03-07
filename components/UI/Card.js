

const Card = (props) => {
    return (
        <div className="border-solid border-2 h-100 bg-white rounded-lg shadow-lg text-xl">
            {props.children}
        </div>
    );
}

export default Card;