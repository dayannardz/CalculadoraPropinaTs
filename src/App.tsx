import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import TipPercentageForm from "./components/TipPercentageForm";
import OrderTotal from "./components/OrderTotal";

import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
const {order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder,} = useOrder()
  return (
    <>
      <header className="bg-teal-400 py-5 ">
        <h1 className="text-center text-4xl font-black">Esto es un titulo con estilos tailwind css</h1>

      </header>

      <main className="max-w-7xl mx-auto py-20 grid grid-cols-2">
        <div className="p=5">

          <h2 className="font-black text-4xl">Menu</h2>

          <div className="mt-10 space-y-3">
            {menuItems.map(item => (

              <MenuItem

                key={item.id}
                item={item}
                addItem = {addItem}


              />

            ))}
          </div>

        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

          <h2 >Consumo</h2>

             {order.length ? (
              
              <>
              <OrderContents
              order = {order}
              removeItem = {removeItem}
              
              />
              
              <TipPercentageForm
              

              />

              <OrderTotal
              order={order}
              tip={tip}
              placeOrder={placeOrder}
              />

              </>
             ):(
              <p>La orden esta vacia</p>
             )}
        </div>
      </main>
    </>
  )
}

export default App
