var Users = React.createClass({
    loadUsersFromServer: function () {
        var thisObj = this;
        $.getJSON(this.props.url, function (usersData) {
            thisObj.setState({ usersData: usersData });
        });
    },
    getInitialState() {
        return { usersData: [] };
    },
    componentDidMount: function () {
        this.loadUsersFromServer();
    },
    render: function () {
        return (
                <div className="main page">
                    <h1>Users</h1>
                    <UsersList listOfUsers={this.state.usersData} />
                </div>
            );
    }
});

var UsersList = React.createClass({
    render: function () {
        var users = this.props.listOfUsers.map(function (u) {
            return <div className="user" key={u.Id}>{u.Name} {u.LastName}</div>;
        });

        return (
            <div className="usersList">
                {users}
            </div>
        );
    }
});


ReactDOM.render(
  <Users url="http://localhost:60055/api/users" />,
  document.getElementById('content')
);