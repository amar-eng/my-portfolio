import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./Pcard.scss";
import Modal from "./Modal";
const Pcard = ({ key, title, desc, website, code, pic }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="cards">
      <div className="pCard">
        <img src={pic} alt={title} className="pCard__pic" />
        <div className="pCard__title">{title}</div>
        <BsChevronDown onClick={() => setSelected(true)} />
      </div>
      {selected && (
        <Modal
          title={title}
          desc={desc}
          website={website}
          code={code}
          setSelected={setSelected}
        />
      )}
    </div>
  );
};

export default Pcard;
