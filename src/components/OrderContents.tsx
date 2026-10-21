import type { OrderItem, MenuItem } from "../types";

export type OrderContentsProps = {
    order: OrderItem[];
    removeItem: (id: MenuItem['id']) => void;
};

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <>
            <h2 className="space-y-3 mt-10 text-2xl font-black">Consumo</h2>
            <div className="space-y-3 mt-5">
                {order.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-t border-gray-200 py-5"
                    >
                        <div>
                            <p className="text-lg">{item.name} - ${item.price}</p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - ${item.price * item.quantity}
                            </p>
                        </div>

                        <button 
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full"
                            onClick={() => removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}
