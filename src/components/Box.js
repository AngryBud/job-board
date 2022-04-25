// import TitleBox from "./TitleBox";
// import Title from './Title';

// {/* <Box className = {props.className}/> */}
const Box = (props) => {
    console.log(props.className);
    return  (<div className = {props.className}>   
                <h2>{props.title}</h2>
                <p>{props.contractType} - {props.country} - {props.city}</p>
             </div>)
}

export default Box;