import '../css/Categories.css';

function Categories({ categories, selectedCategory, performToggle }) {
  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <div
            key={`category-${category}`}
            className={`categories-item ${
              selectedCategory === category ? 'categories-item-selected' : ''
            }`}
            onClick={() => performToggle(category)}
            
            
          >
            {category}
          </div>
        );
      })}
    </div>
  );
}

export default Categories;