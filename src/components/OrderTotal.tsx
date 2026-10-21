import { useCallback } from "react";
import type { OrderItem } from "../types"; 

type OrderTotalProps = {
    order: OrderItem[];
    tip: number;
    placeOrder: () => void;
};

export default function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {
    
    const subtotalAmount = useCallback(() => 
        order.reduce((total, item) => total + (item.quantity * item.price), 0), 
    [order]);

    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order]);

    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [order, tip]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propinas</h2>

                <p>Subtotal a pagar: {''}
                    <span className="font-bold">${subtotalAmount()}</span>
                </p>

                <p>Propina: {''}
                    <span className="font-bold">${tipAmount()}</span>
                </p>

                <p>Total a pagar: {''}
                    <span className="font-bold">${totalAmount()}</span>
                </p>
            </div>

            <button 
                className="w-full bg-black p-3 text-white uppercase font-bold mt-10 disabled:opacity-10"
                onClick={placeOrder}
                disabled={order.length === 0} 
            >
                Guardar Orden 
            </button>
        </>
    );
}
