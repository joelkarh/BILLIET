import Header from "./Header";
import Navbar from "./Navbar"


const Layout = ({children}) => {
    return (
    <div className="container-fluid layout">
        <nav className="row">
            <Navbar/>
        </nav>
            <Header/>
        <main className="">{children}</main>
       {/* </Footer> */}
    </div>)
};

export default Layout;
