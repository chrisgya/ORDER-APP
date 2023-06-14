import { Helmet } from 'react-helmet';
import { useState } from 'react'
import useMenuData from "./hooks/useMenuData"
import MenuOptionList from "./components/MenuOptionList"
import OrderedList from "./components/OrderedList"
import './App.css'

function App() {
const menuData = useMenuData();
 const [orderList, setOrderList] = useState([]);

const addOrder = (itemList, itemName, option) => {
  const newItem = {
        item: itemName,
        option: {
          ...option,
          quantity: 1
        }
      }
      
  if (!Array.isArray(itemList)) {
    return [
      newItem
    ];
  }

  const updatedOrders = [...itemList];
  const existingItemIndex = updatedOrders.findIndex(
    (item) => item.item === itemName && item.option.size === option.size
  );

  if (existingItemIndex !== -1) {
    updatedOrders[existingItemIndex].option.quantity++;
  } else {
    updatedOrders.push(newItem);
  }

  return updatedOrders;
};


  const onOrder = (item, option) => {
    const newOrders =  addOrder(orderList, item, option);
       setOrderList(newOrders);
  };


  if(menuData === null){
   return  <div>Loading data...</div> 
  }

  return (
    <><Helmet>
        <html lang="en" />
        <meta name="version" content={menuData.meta.version} />
        <meta name="date" content={menuData.meta.date} />
        <title>Fast Food Ordering System | Home</title>
      </Helmet>
      
    <div>
      <h1>Fast Food Ordering System</h1>
    
<div className='container'>
    <MenuOptionList menuOptions={menuData.menu} onOrder={onOrder} />
    {orderList.length >0 ?<div>
    <OrderedList orderedList={orderList} />
    </div>: null}
</div>

    </div>
    </>
  );
}

export default App
