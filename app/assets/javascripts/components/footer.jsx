class footer extends React.Component {
  renderActiveLinks() {
      return(
        <footer className="page-footer light-blue darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">FrienDiagram</h5>
                <p className="grey-text text-lighten-4">Friends become closer when they meet in the middle.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a href="/about">About</a></li>
                  <li><a href="https://github.com/perohrstrom">Github</a></li>
                  <li><a href="https://twitter.com/perlikethefruit">Twitter</a></li>
                  <li><a href="mailto:per.k.ohrstrom@gmail.com">Email</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright  grey darken-3">
            <div className="container">
              © 2018 Copyright Text
            </div>
          </div>
        </footer>
      )
    
  }

  render() {
    return(
      <div>
        {this.renderActiveLinks()}
      </div>
    );
  }
}
