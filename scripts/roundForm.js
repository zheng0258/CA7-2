/*************************************************************************
 * File: roundForm.js
 * This file defines a React controlled component for a logging a round.
 ************************************************************************/

class RoundForm extends React.Component {
    constructor(props) {
      super(props);
      const today = new Date(Date.now()-(new Date()).getTimezoneOffset()*60000);
      this.state = {date:  today.toISOString().substr(0,10),
                    course: ''}; 
    }
  
    handleChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
      }
  
    //Implement handleSubmit
    handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!")
    }
  
    render() {
        return (
        <form id="logRoundForm" 
              onSubmit={this.handleSubmit} noValidate>
            <div className="mb-3 centered">
                <label htmlFor="roundDate" className="form-label">Date:
                    <input name="date" id="roundDate" 
                       className="form-control centered" type="date" 
                       aria-describedby="roundDateDescr" value={this.state.date} 
                       onChange={this.handleChange} required/>
                </label>
                <div id="roundDateDescr" className="form-text">
                Enter a valid date
                </div>
            </div>
            <div className="mb-3 centered">
                <label htmlFor="roundCourse" className="form-label">Course:
                    <input name="course" id="roundCourse"  
                        className="form-control centered" type="text" 
                        aria-describedby="roundCourseDescr"
                        size="50" maxLength="50"  value={this.state.course} 
                        onChange={this.handleChange} required />
                </label>
                <div id="roundCourseDescr" className="form-text">
                Enter a course name of at most 50 characters
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