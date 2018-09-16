class DiagramForm extends React.Component {
  constructor() {
    super();
    this.state = {
      locA: "",
      locB: "",
      type: "bar",
      value: "coconut"   
    }
    this.handleChange = this.handleChange.bind(this);
    this.findResults = this.findResults.bind(this);
  }

  findResults(event) {
    event.preventDefault();
    this.props.findResults(
      this.state.locA, 
      this.state.locB, 
      this.state.type
    );
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });

  }


  render() {
    const { locA, locB, type } = this.state;

    console.log(this.state)
    // console.log("I'm in the new event form render, here's the amount of friends", friends.length)
    return (
      <div className='form_container'>
      <div className="row">
        <form className="col s12" onSubmit={this.findResults}>
          <br />
          <input value={locA} onChange={this.handleChange} type="text" name="locA" placeholder="Enter where you'll be" /><br/>
          <input value={locB} onChange={this.handleChange} type="text" name="locB" placeholder="Enter where your friend will be" /><br />
          
          <select name='type' defaultValue={type} onChange={this.handleChange} style={{display:"block"}}>
            <option value="bar">Bar</option>
            <option value="cafe">Cafe</option>
            <option value="restaurant">Restaurant</option>
            <option value="museum">Museum</option>
            <option value="park">Park</option>
          </select>
          <br />
          
         
          <input type="submit" value="Search for Places!" className="waves-effect waves-light btn normal-btn" />
        </form>
      </div>
      </div>
    )
  }
}