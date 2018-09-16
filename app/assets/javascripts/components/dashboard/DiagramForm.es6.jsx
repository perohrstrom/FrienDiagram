class DiagramForm extends React.Component {
  constructor() {
    super();
    this.state = {
      locA: "",
      locB: "",
      type: null,
    
    }
    this.updateLocA = this.updateLocA.bind(this);
    this.updateLocB = this.updateLocB.bind(this);
    this.findResults = this.findResults.bind(this);
  }

  findResults(event) {
    event.preventDefault();
    this.props.findResults(this.state.locA, this.state.locB);
    

  }

  updateLocA(event) {
    event.preventDefault();
    this.setState({ locA: event.target.value });

  }

  updateLocB(event) {
    event.preventDefault();
    this.setState({ locB: event.target.value });

  }

  render() {
    const { locA, locB, type  } = this.state;
    // console.log("I'm in the new event form render, here's the amount of friends", friends.length)
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.findResults}>
            <label htmlFor="Your Location">:</label><br/>
          <input value={locA} onChange={this.updateLocA} type="text" name="locA" placeholder="Enter where you'll be" /><br/>

            <label htmlFor="Your Friend's Location">:</label><br />
          <input value={locB} onChange={this.updateLocB} type="text" name="locB" placeholder="Enter where your friend will be" /><br />

           <label htmlFor="title">Type:</label><br/>
           <select className="event_form" type="text" name="type" placeholder="Event Type">
             <option value="bar">Bar</option>
             <option value="cafe">Cafe</option>
             <option value="restaurant">Restaurant</option>
             <option value="museum">Museum</option>
             <option value="park">Park</option>
           </select>
            <input type="submit" value="Create Event" className="waves-effect waves-light btn normal-btn" />
          </form>
      </div>
    )
  }
}
