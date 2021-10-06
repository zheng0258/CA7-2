class RoundForm extends React.Component {
    constructor(props) {
      super(props);
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