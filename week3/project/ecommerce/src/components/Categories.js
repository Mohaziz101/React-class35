import '../css/Categories.css';

function Categories({ categories, selectedCategory, onToggle }) {
  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <div
            key={`${category}`}
            className={`categories-item ${
              selectedCategory === category ? 'categories-item-selected' : ''
            }`}
            onClick={() => onToggle(category)}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
}

export default Categories;