class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      friendData : [],
      homeBaseData: []
    }
    this.gatherFriendData = this.gatherFriendData.bind(this);
    this.gatherAddressData = this.gatherAddressData.bind(this);
    // this.gatherEventData = this.gatherEventData.bind(this);
  }

  componentDidMount() {
    this.setState({
      friendData: this.props.friends,
      homeBaseData: this.props.homeBases
     })
  }

  gatherFriendData(searchResult) {
    console.log(this.state)
    this.setState((prevState) => {
      return {
        friendData: [...prevState.friendData, searchResult]
      }
    })
  }

  gatherAddressData(newAddress) {
    debugger;
    console.log(this.state)
    this.setState((prevState) => {
      return {
        homeBaseData: [...prevState.homeBaseData, newAddress]
      }
    })
    debugger;
  }

  fakeFunction() {
    return this.props.homeBases
  }

  render() {
    return (
      <div>
        <FriendSearchForm sendFriendData={this.gatherFriendData} />
        <UserAddressForm sendAddressData={this.gatherAddressData} />

        <NewEventForm
        homeBases={this.props.homeBases}
        friendData={this.state.friendData}
        homeBaseData={this.state.homeBaseData}
        sendEventData={this.gatherEventData}
        token={this.props.token} />
      </div>
    )
  }
}