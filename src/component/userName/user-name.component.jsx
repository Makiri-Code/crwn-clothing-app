import { useContext } from "react";
import { ProductsContext } from "../context/products.context";
import { UserContext } from "../context/user.contex";

const UserName = () => {
    const { userDisplayName} = useContext(ProductsContext);
    const {currentUser} = useContext(UserContext)
    
    return(
       <div>
        {
            Object.keys(userDisplayName).map((username) => {
                if(currentUser.email === username) {
                    return(
                        <h1 key={username}>Welcome, {userDisplayName[username]}</h1>
                    )
                }
            })
        }
       </div>
    )
};

export default UserName; 