import Header from "../../Header";
import Footer from "../../Footer";

function Layout({children}){
    return(
        <div className="container">
            <header>
            <Header/>
            </header>
            <main>
            {children}
            </main>
            <footer>
            <Footer/>
            </footer>
        </div>
    );
}

export default Layout;