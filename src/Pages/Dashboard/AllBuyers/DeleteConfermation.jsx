import React from 'react';

const DeleteConfermation = ({Seller,setSeller,deleteBuyer}) => {
    return (
        <div>
      {/* <label htmlFor="buyerDelete" className="btn">
        open modal
      </label> */}
      

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="buyerDelete" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
          Varifying Confarmation
          </h3>
          <p className="py-4">
            Are You sure you want to Delete<span className="text-xl font-bold text-red-700">{Seller?.name}</span> ?<br />

          </p>
          <div className="modal-action">
            <label htmlFor="buyerDelete" className="btn btn-primary" onClick={deleteBuyer}>
              Confirm
            </label>
            <label htmlFor="buyerDelete" className="btn" onClick={()=>setSeller(null)} >
             Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DeleteConfermation;