import Item from "./Item"

const ItemList = ({ products }) => {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-4">
                {products.map(product => {
                    return (
                        <Item
                            item={product}
                            key={product.id}
                        ></Item>
                    )
                })}
            </div>
        </>
    )
}
export default ItemList