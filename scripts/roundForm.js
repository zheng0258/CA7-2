/*************************************************************************
 * File: roundForm.js
 * This file defines a React controlled component for a logging a round.
 ************************************************************************/

class RoundForm extends React.Component {
    constructor(props) {
      super(props);
      const today = new Date(Date.now()-(new Date()).getTimezoneOffset()*60000);
      this.state = {date:  today.toISOString().substr(0,10)}; 
    }
  
    handleChange = (event) => {
      //update component state here
    }
  
    handleSubmit = (event) => {
      alert('The form was submitted!');
      event.preventDefault();
    }
  
    render() {
        return (
        <form id="logRoundForm" 
              onSubmit={this.handleSubmit} noValidate>
            <div className="mb-3 centered">
                <label htmlFor="roundDate" className="form-label">Date:
                    <input id="roundDate" className="form-control centered" type="date" 
                       aria-describedby="roundDateDescr" value={this.state.date} required/>
                </label>
                <div id="roundDateDescr" className="form-text">
                Enter a valid date
                </div>
            </div>
            <div className="centered">
                <button type="submit" className="btn btn-primary">
                    <span className="fa fa-save"></span>
                    &nbsp;Log Round
                </button>
          </div>
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <RoundForm />,
    document.getElementById('root')
  );