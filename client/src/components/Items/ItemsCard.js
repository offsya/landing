import React, {useMemo} from 'react';
import Item from "./Item";
import {useSelector} from "react-redux";



const ItemsCard = () => {
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
        <div className='itemsCard'>
                {
                    allItemsSearch.map(elem => {
                                return <Item elem={elem}/>
                        })
                }
        </div>
    );
};

export default ItemsCard;