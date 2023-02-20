import IBook from "./IBook";
import IUser from "./IUser";

interface IShop {
  id: number;
  user: IUser;
  title: string;
  books: Array<IBook>;
}

export default IShop;
