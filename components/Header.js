import Image from "next/image";

const Header = (props) => {
    return (
    <header id='wrapper' className="container-fluid">
        <div key={props.id} className="header-Home ">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    </header>
    )
};


export default Header;


