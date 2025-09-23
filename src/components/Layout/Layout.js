import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

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

            <div className="">
                <footer className="">
                    <Footer/>
                </footer>
            </div>
        </div>
    );
}

export default Layout;