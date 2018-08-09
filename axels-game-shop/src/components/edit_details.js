import React from 'react';

class EditDetails extends React.Component {

    render(){
    const {title,id,img,quantity,description, price} = this.props.game

      return (
      <React.Fragment>
      <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby={id  +"Label"} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id={id}>{title}</h2>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={img} alt={title} />
              <p><strong>Price:</strong> ${price}</p>
              <form className="form-inline">
            	   <div className="input-group mb-2 mr-sm-2">
                    <label htmlFor="Quantity"> <strong>Quantity:</strong> </label>
                    <input type="number" className='form-control mb-2 mr-sm-2 mb-sm-0' type="number" defaultValue={quantity} />
                </div>
            </form>
            <strong>Description:</strong>
            <textarea className='form-control mb-2 mr-sm-2 mb-sm-0'>{description}</textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
      );
    }
}

export default EditDetails;
