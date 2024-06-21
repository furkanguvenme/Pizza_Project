import "./Name.css";

export default function Name({ userInfo }) {
  return (
    <div className="inputbox">
      <input required="required" type="text" onChange={userInfo} />
      <span>Username</span>
      <i></i>
    </div>
  );
}
