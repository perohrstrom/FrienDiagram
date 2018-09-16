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

  findResults(locA, locB, type) {
    results = []
    this.state.results = results
  }

  render() {
    const { locA, locB, type, results  } = this.state;
    return (
      <div className='diagram'>
        <DiagramForm findResults={this.findResults} />
      </div>
    )
  }
}
