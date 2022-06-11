import { useAppContext } from './../context/AppContext'

const ItemListContainer = () => {
  const {products} = useAppContext();
  console.log(products);
  return (
    <div>DEV</div>
  )
}
export default ItemListContainer