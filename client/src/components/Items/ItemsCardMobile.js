import React, {useMemo} from 'react';
import {useSelector} from "react-redux";
import ItemMobile from "./ItemMobile";



const ItemsCardMobile = () => {
    const allItems = useSelector((state) => state.allItems.setAllItems)
    const search = useSelector((state) => state.search.search)

    const allItemsSearch = useMemo(() => {
        if(search !== ''){
            return allItems.filter((elem) => {
                try{
                    return elem.name.toLowerCase().includes(search.toLowerCase())
                }catch (e) {
                    return false
                }
            })
        }else{
            return allItems
        }
    }, [search, allItems])

    return (
        <div className='itemsCard-mobile'>
                {
                    allItemsSearch.map(elem => {
                                return <ItemMobile elem={elem}/>
                        })
                }
        </div>
    );
};

export default ItemsCardMobile;