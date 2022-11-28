import React from "react";

const Smodal = ({ setPid, handleAdvertisement }) => {
  return (
    <div>
      <input type="checkbox" id="small_modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Advirtisement Confermation</h3>
          <p className="py-4">Are You Sure You want to Advertise this item?</p>
          <div className="modal-action">
            <label
              htmlFor="small_modal"
              className="btn btn-primary"
              onClick={handleAdvertisement}
            >
              Confirm
            </label>
            <label
              htmlFor="small_modal"
              className="btn btn-primary"
              onClick={() => setPid("")}
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smodal;
