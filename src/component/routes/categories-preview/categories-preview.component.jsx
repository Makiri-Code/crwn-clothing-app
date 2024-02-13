import { useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.contex";
import { ProductsContext } from "../../context/products.context";
import Button from "../../button/button.component";
import UserName from "../../userName/user-name.component";
import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(ProductsContext);
    const {currentUser} = useContext(UserContext);
    const navigate = useNavigate();
    const goToAuth = () => navigate('/auth');
    return (
        <>
            {
                currentUser ? 
                    <div className="shop-container">
                        <UserName/>
                        {
                            Object.keys(categoriesMap).map((title) => {
                                const products = categoriesMap[title]
                                return (
                                <CategoryPreview key={title} title={title} products={products}/>
                                )
                            })
                        }
                    </div>  : 
                    <div>
                        <h1>PLease sign in to access shop</h1>
                        <Button onClick={goToAuth}>Sign In</Button>
                    </div>
            } 
            
        </>
        
    )
};

export default CategoriesPreview;