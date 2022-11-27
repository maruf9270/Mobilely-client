import React from "react";

const DeletConfirm = ({setdeleteID,handleDelete}) => {
  return (
    <div>
      <input type="checkbox" id="small_modal_2" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Deleting Confermation
          </h3>
          <p className="py-4">
           Are You Sure YOu Want to Delete This item ? 
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
