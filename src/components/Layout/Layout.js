import Header from "../../Header";
import Footer from "../../Footer";

function Layout({children}){
    return(
        <div className="container ">
            <div>
                <header>
                    <Header/>
                </header>
            </div>

            <div>
                <main>
                    {children}
                </main>
            </div>

            <div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
}

export default Layout;