import "./Checkbox.css";

export default function Checkbox({ ingredient, cost, changeCheckbox }) {
  const id = `cbx-${ingredient}`;

  return (
    <div className="checkbox-wrapper-46">
      <input
        type="checkbox"
        id={id}
        className="inp-cbx"
        name="extra"
        value={ingredient}
        data-cost={cost}
        onChange={changeCheckbox}
      />
      <label htmlFor={id} className="cbx">
        <span>
          <svg viewBox="0 0 12 10" height="10px" width="12px">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>{ingredient}</span>
      </label>
    </div>
  );
}
