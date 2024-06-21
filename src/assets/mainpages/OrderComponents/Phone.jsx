import "./Phone.css";

export default function Phone({ userInfo }) {
  return (
    <div className="ui-wrapper">
      <input defaultChecked="" id="Austria" name="flag" type="radio" />
      <input id="Turkey" name="flag" type="radio" />
      <input id="Belgium" name="flag" type="radio" />
      <input id="Bulgaria" name="flag" type="radio" />
      <input id="Croatia" name="flag" type="radio" />
      <input id="Cyprus" name="flag" type="radio" />
      <input id="Czech" name="flag" type="radio" />
      <input id="Denmark" name="flag" type="radio" />
      <input id="Estonia" name="flag" type="radio" />
      <input id="Finland" name="flag" type="radio" />
      <input id="France" name="flag" type="radio" />
      <input id="Germany" name="flag" type="radio" />
      <input id="Greece" name="flag" type="radio" />
      <input id="Hungary" name="flag" type="radio" />
      <input id="Iceland" name="flag" type="radio" />
      <input id="Ireland" name="flag" type="radio" />
      <input id="Italy" name="flag" type="radio" />
      <input id="Latvia" name="flag" type="radio" />
      <input id="Liechtenstein" name="flag" type="radio" />
      <input id="Lithuania" name="flag" type="radio" />
      <input id="Luxembourg" name="flag" type="radio" />
      <input id="Malta" name="flag" type="radio" />
      <input id="Netherlands" name="flag" type="radio" />
      <input id="Norway" name="flag" type="radio" />
      <input id="Poland" name="flag" type="radio" />
      <input id="Portugal" name="flag" type="radio" />
      <input id="Romania" name="flag" type="radio" />
      <input id="Slovakia" name="flag" type="radio" />
      <input id="Slovenia" name="flag" type="radio" />
      <input id="Spain" name="flag" type="radio" />
      <input id="Sweden" name="flag" type="radio" />
      <input
        className="dropdown-checkbox"
        name="dropdown"
        id="dropdown"
        type="checkbox"
      />
      <label className="dropdown-container" htmlFor="dropdown"></label>
      <div className="input-wrapper">
        <legend>
          <label htmlFor="phonenumber">Phonenumber*</label>
        </legend>
        <div className="textfield">
          <input
            pattern="\d+"
            maxLength="11"
            id="phonenumber"
            type="text"
            onChange={userInfo}
          />
          <span className="invalid-msg">This is not a valid phone number</span>
        </div>
      </div>
      <div className="select-wrapper">
        <ul>
          <li className="Austria">
            <label htmlFor="Austria">
              <span role="img" aria-label="Austria">
                🇦🇹
              </span>
              Austria (+43)
            </label>
          </li>
          <li className="Turkey">
            <label htmlFor="Turkey">
              <span role="img" aria-label="Turkey">
                🇹🇷
              </span>
              Turkey (+90)
            </label>
          </li>
          <li className="Belgium">
            <label htmlFor="Belgium">
              <span role="img" aria-label="Belgium">
                🇧🇪
              </span>
              Belgium (+32)
            </label>
          </li>
          <li className="Bulgaria">
            <label htmlFor="Bulgaria">
              <span role="img" aria-label="Bulgaria">
                🇧🇬
              </span>
              Bulgaria (+359)
            </label>
          </li>
          <li className="Croatia">
            <label htmlFor="Croatia">
              <span role="img" aria-label="Croatia">
                🇭🇷
              </span>
              Croatia (+385)
            </label>
          </li>
          <li className="Cyprus">
            <label htmlFor="Cyprus">
              <span role="img" aria-label="Cyprus">
                🇨🇾
              </span>
              Cyprus (+357)
            </label>
          </li>
          <li className="Czech">
            <label htmlFor="Czech">
              <span role="img" aria-label="Czech Republic">
                🇨🇿
              </span>
              Czech Republic (+420)
            </label>
          </li>
          <li className="Denmark">
            <label htmlFor="Denmark">
              <span role="img" aria-label="Denmark">
                🇩🇰
              </span>
              Denmark (+45)
            </label>
          </li>
          <li className="Estonia">
            <label htmlFor="Estonia">
              <span role="img" aria-label="Estonia">
                🇪🇪
              </span>
              Estonia (+372)
            </label>
          </li>
          <li className="Finland">
            <label htmlFor="Finland">
              <span role="img" aria-label="Finland">
                🇫🇮
              </span>
              Finland (+358)
            </label>
          </li>
          <li className="France">
            <label htmlFor="France">
              <span role="img" aria-label="France">
                🇫🇷
              </span>
              France (+33)
            </label>
          </li>
          <li className="Germany">
            <label htmlFor="Germany">
              <span role="img" aria-label="Germany">
                🇩🇪
              </span>
              Germany (+49)
            </label>
          </li>
          <li className="Greece">
            <label htmlFor="Greece">
              <span role="img" aria-label="Greece">
                🇬🇷
              </span>
              Greece (+30)
            </label>
          </li>
          <li className="Hungary">
            <label htmlFor="Hungary">
              <span role="img" aria-label="Hungary">
                🇭🇺
              </span>
              Hungary (+36)
            </label>
          </li>
          <li className="Iceland">
            <label htmlFor="Iceland">
              <span role="img" aria-label="Iceland">
                🇮🇸
              </span>
              Iceland (+354)
            </label>
          </li>
          <li className="Ireland">
            <label htmlFor="Ireland">
              <span role="img" aria-label="Republic of Ireland">
                🇮🇪
              </span>
              Republic of Ireland (+353)
            </label>
          </li>
          <li className="Italy">
            <label htmlFor="Italy">
              <span role="img" aria-label="Italy">
                🇮🇹
              </span>
              Italy (+39)
            </label>
          </li>
          <li className="Latvia">
            <label htmlFor="Latvia">
              <span role="img" aria-label="Latvia">
                🇱🇻
              </span>
              Latvia (+371)
            </label>
          </li>
          <li className="Liechtenstein">
            <label htmlFor="Liechtenstein">
              <span role="img" aria-label="Liechtenstein">
                🇱🇮
              </span>
              Liechtenstein (+423)
            </label>
          </li>
          <li className="Lithuania">
            <label htmlFor="Lithuania">
              <span role="img" aria-label="Lithuania">
                🇱🇹
              </span>
              Lithuania (+370)
            </label>
          </li>
          <li className="Luxembourg">
            <label htmlFor="Luxembourg">
              <span role="img" aria-label="Luxembourg">
                🇱🇺
              </span>
              Luxembourg (+352)
            </label>
          </li>
          <li className="Malta">
            <label htmlFor="Malta">
              <span role="img" aria-label="Malta">
                🇲🇹
              </span>
              Malta (+356)
            </label>
          </li>
          <li className="Netherlands">
            <label htmlFor="Netherlands">
              <span role="img" aria-label="Netherlands">
                🇳🇱
              </span>
              Netherlands (+31)
            </label>
          </li>
          <li className="Norway">
            <label htmlFor="Norway">
              <span role="img" aria-label="Norway">
                🇳🇴
              </span>
              Norway (+47)
            </label>
          </li>
          <li className="Poland">
            <label htmlFor="Poland">
              <span role="img" aria-label="Poland">
                🇵🇱
              </span>
              Poland (+48)
            </label>
          </li>
          <li className="Portugal">
            <label htmlFor="Portugal">
              <span role="img" aria-label="Portugal">
                🇵🇹
              </span>
              Portugal (+351)
            </label>
          </li>
          <li className="Romania">
            <label htmlFor="Romania">
              <span role="img" aria-label="Romania">
                🇷🇴
              </span>
              Romania (+40)
            </label>
          </li>
          <li className="Slovakia">
            <label htmlFor="Slovakia">
              <span role="img" aria-label="Slovakia">
                🇸🇰
              </span>
              Slovakia (+421)
            </label>
          </li>
          <li className="Slovenia">
            <label htmlFor="Slovenia">
              <span role="img" aria-label="Slovenia">
                🇸🇮
              </span>
              Slovenia (+386)
            </label>
          </li>
          <li className="Spain">
            <label htmlFor="Spain">
              <span role="img" aria-label="Spain">
                🇪🇸
              </span>
              Spain (+34)
            </label>
          </li>
          <li className="Sweden">
            <label htmlFor="Sweden">
              <span role="img" aria-label="Sweden">
                🇸🇪
              </span>
              Sweden (+46)
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
