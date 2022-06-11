const CheckoutCartResume = ({ totalPrice, totalProducts }) => {
    return (
        <>
            <div className="bg-white rounded-md px-2 py-5 w-full sm:w-10/12 lg:w-5/12 flex flex-col items-center gap-4 shadow-secundario/30 shadow-lg hover:shadow-secundario/60">
                <h2 className="w-10/12 text-center text-xl pb-1 border-b border-secundario">Resumen de compra</h2>
                <div className="flex flex-col w-10/12 gap-2">
                    <div className="flex justify-between">
                        <p className="text-lg">Cantidad de productos:</p>
                        <p className="font-semibold">{totalProducts}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-lg">Total a pagar:</p>
                        <p className="font-semibold">$ {totalPrice}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CheckoutCartResume