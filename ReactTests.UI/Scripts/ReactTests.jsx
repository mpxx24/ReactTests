var Users = React.createClass({
    loadUsersFromServer: function() {
        $.getJSON(this.props.url)
            .then((usersData) => {
                console.log("GOT'EM", usersData);
                this.setState({ usersData: usersData });
            });
    },
    getInitialState(){
        return {usersData: []};
    },
    componentDidMount: function() {
        this.loadUsersFromServer();
    },
    render: function () {
        console.log("re");
        return (
          <div className="users">
            <h1>Users</h1>
            <UsersList data= {this.props.usersData}/>
          </div>
      );
    }
});

var UsersList = React.createClass({
    render: function () {
        return (
            <div className="usersList">
            {this.props.usersData}
            </div>
        );
    }
});


ReactDOM.render(
  <Users url="http://localhost:60055/api/users"/>,
  document.getElementById('content')
);