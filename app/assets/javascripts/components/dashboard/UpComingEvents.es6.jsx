class UpComingEvents extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { userEvents } = this.props
    return (
      <div className="collapsible-body">
        <h5>Upcoming Events</h5>
        { userEvents.map((event, i ) => {
          return (
            <div key={i}>
              <h5><a href={"events/"+event.id}>Event: {event.title}</a></h5>
              <h6>Date: {event.day} @ {event.hour}</h6>
              <h6>Host: {event.host_username}</h6>
              <h6>Type: {event.event_type}</h6>
            </div>
          )}
        )}
      </div>

    )
  }
}
