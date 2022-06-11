import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.find(producto => producto.id === id);

    const addToCart = (producto, cantidad) => {
        const newCart = [...cart] //copia el array
        const productoEnCart = isInCart(producto.id);

        if (productoEnCart) {
            newCart[newCart.findIndex(prod => prod.id === producto.id)].quantity += cantidad;
            setCart(newCart);
            return
        }
        producto.quantity = cantidad;
        setCart([...newCart, producto]);
    }

    const removeItem = (producto) => {
        const newCart = [...cart];
        const productInCart = isInCart(producto.id);
        if (!productInCart) {
            return
        }
        const deleteProduct = newCart.filter(prod => prod.id !== producto.id);
        console.log(`Se quitó del carrito a "${producto.name}"`);
        setCart(deleteProduct);
    }
    const deleteCart = () => {
        setCart([]); 
    }

    return <CartContext.Provider
        value={{
            cart,
            addToCart,
            removeItem,
            deleteCart,
            setCart

        }}
    > {children} </CartContext.Provider>
}
export default CartContextProvider