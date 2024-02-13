import { Link } from 'react-router-dom'
import './category.style.scss'

const CategoryItem = ({category}) => {
    const {imageUrl, title, route} = category
    return(
        <Link className="category-container" to={route}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="category-body-container">
              <h2>{title.toUpperCase()}</h2>
              <p>Shop Now</p>
            </div>
          </Link>
    )
}

export default CategoryItem;