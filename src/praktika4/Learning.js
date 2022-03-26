import React from "react";

function Learning({ id, lang, img, status, changeStatus }) {
  return (
    <div className="col-3 mt-4">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={img} className="card-img-top p-2" alt="img" />
        <div className="card-body">
          <p className="card-text">{lang}</p>
          <p>{status ? "Išmokau" : "Mokausi"}</p>
          <button onClick={() => changeStatus(id)} className="btn btn-primary">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Learning;
