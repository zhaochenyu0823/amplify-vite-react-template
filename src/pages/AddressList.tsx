import { useState, useEffect } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

export default function AddressList() {
    const [addresses, setAddressList] = useState<Schema["UserAddress"]["type"][]>([]);

    const fetchAddress = async () => {
        try {
            const { data: items } = await client.models.UserAddress.list();
            setAddressList(items);
        } catch (error) {
            console.error("Failed to fetch addresses:", error);
        }
    };

    useEffect(() => {
        fetchAddress();
    }, []);

    return (
      <div>
        <h1>Address List</h1>
        <ul>
          {addresses.map((ad) => (
            <li key={ad.userId}>名前: {ad.name}, 電話番号: {ad.phone}, 住所: {ad.address}</li>
          ))}
        </ul>
      </div>
    );
}
