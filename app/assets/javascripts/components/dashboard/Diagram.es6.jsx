class Diagram extends React.Component {
  constructor() {
    super();
    this.state = {
      locA: "",
      locB: "",
      type: null,
      results: []
    }
  
    this.findResults = this.findResults.bind(this);
  }

  findResults(event) {
    event.preventDefault();
    results = []
    this.state.results = results
  }

  render() {
    const { locA, locB, type, results  } = this.state;
    // console.log("I'm in the new event form render, here's the amount of friends", friends.length)
    return (
      <div className='diagram'>
        <DiagramForm findResults={this.findResults} />
      </div>
    )
  }
}
