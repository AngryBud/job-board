const Footer = (props) => {
    return (
        <div className="footer"> 
            <p>Made with <span>{props.tech}</span> at <span>{props.society}</span> By <span>{props.name}</span></p>
        </div>
    )

} 
export default Footer;