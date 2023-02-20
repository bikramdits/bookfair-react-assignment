import IBook from "./IBook";
import IShop from "./IShop";
import IUser from "./IUser";

interface IOrder {
    id: number;
    Items: Array<IBook>
    shop: IShop;
    buyer: IUser;
    seller: IUser;
}

export default IOrder