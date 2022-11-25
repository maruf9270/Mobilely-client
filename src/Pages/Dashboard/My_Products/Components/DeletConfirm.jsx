import React from "react";

const DeletConfirm = ({setdeleteID,handleDelete}) => {
  return (
    <div>
      <input type="checkbox" id="small_modal_2" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label
              htmlFor="small_modal_2"
              className="btn btn-primary"
              onClick={handleDelete}
            >
              Confirm
            </label>
            <label
              htmlFor="small_modal_2"
              className="btn "
              onClick={() => setdeleteID(null)}
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletConfirm;
