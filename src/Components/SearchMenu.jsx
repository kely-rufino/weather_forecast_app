import { useState } from "react";


function FloatMenu(props) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="container">
      {showMenu ? <div className="Box1">{props.children}</div> : null}
      <div className="button">
        <button onClick={() => setShowMenu(!showMenu)}>Click here</button>
      </div>
    </div>
  );
}

export default FloatMenu;