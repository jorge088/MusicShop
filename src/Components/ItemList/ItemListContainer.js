import { useAppContext } from './../context/AppContext'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([])
  const [categoryValid, setCategoryValid] = useState(false);

  const { products } = useAppContext();
  useEffect(() => {
    setItems([]);
    setTimeout(() => {
      let itemsFiltered = products.filter(product => product.category === categoryId);
      if (itemsFiltered.length !== 0) {
        setItems(itemsFiltered);
        setCategoryValid(true);
      } else {
        setItems(products);
        setCategoryValid(false);
      }
    }, 500);
  }, [categoryId, products])
  return (
    <>
      {items.length !== 0 ?
        <div className="w-11/12  mx-auto py-4">
          <h2 className="text-xl py-4 font-medium text-center ">
            {categoryValid ?
              `Tenemos estos ${categoryId}`
              :
              "Nuestros productos"
            }
          </h2>
          <ItemList products={ items }/>
        </div>
        :
        <Loading/>
      }
    </>
  )
}
export default ItemListContainer