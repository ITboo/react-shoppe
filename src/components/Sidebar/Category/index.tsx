import Title from "../../Title";
import './Category.css'

function Category({ handleChange }) {
  return (
    <div>
      <Title className="sidebar__title">Category</Title>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
