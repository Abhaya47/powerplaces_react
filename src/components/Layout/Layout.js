import Header from "../../Header";
import Footer from "../../Footer";

function Layout({children}){
    return(
        <div className="container">
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;