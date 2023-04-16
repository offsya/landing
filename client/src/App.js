import React from 'react';
import SearchBar from "./components/Search/SearchBar";
import './styles/App.scss'
import BodyBar from "./components/BodyBar";
import OptionsBar from "./components/Options/OptionsBar";
import {useSelector} from "react-redux";
import OptionsSearchBar from "./components/Search/OptionsSearchBar";
import SearchBarMobile from "./components/Search/SearchBarMobile";
import ItemsCardMobile from "./components/Items/ItemsCardMobile";
import CartMobile from "./components/Cart/CartMobile";
import OptionsBarMobile from "./components/Options/OptionsBarMobile";

function App() {
    const seeOptions = useSelector((state) => state.seeOptions.seeOptions)
    const [isMobile, setIsMobile] = React.useState(false);
    const [isOpenCart, setIsOpenCart] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    console.log(isMobile)

    return (
    <div className="App">
        {
            !isMobile ?
                <div>
                    {
                        seeOptions ?
                            <div>
                                <OptionsSearchBar/>
                                <OptionsBar/>
                            </div>
                            :
                            <div>
                                <SearchBar/>
                                <BodyBar/>
                            </div>
                    }
                </div>
                :
                <div>
                    <SearchBarMobile setIsMobile={setIsMobile}  isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart}/>
                    {
                        isOpenCart ?
                            <div>
                                {
                                    seeOptions ?
                                        <OptionsBarMobile/>
                                        :
                                        <CartMobile/>
                                }
                            </div>

                        :
                            <ItemsCardMobile/>
                    }
                </div>
        }
    </div>
    );
}

export default App;
