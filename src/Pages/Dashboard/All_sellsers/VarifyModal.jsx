import React from "react";

const VarifyModal = ({varify,setVarify,varifySeller}) => {
  return (
    <div>
      {/* <label htmlFor="varify" className="btn">
        open modal
      </label> */}
      

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="varify" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
          Varifying Confarmation
          </h3>
          <p className="py-4">
            Are You sure you want to Variefy <span className="text-xl font-bold text-blue-600">{varify?.name}</span> ?<br />

          </p>
          <div className="modal-action">
            <label htmlFor="varify" className="btn btn-primary" onClick={varifySeller}>
              Confirm
            </label>
            <label htmlFor="varify" className="btn" onClick={()=>setVarify(null)} >
             Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VarifyModal;
