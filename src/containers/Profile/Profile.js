import React from "react";

class Profile extends React.Component {
  // state = {
  //   data: {},
  //   loaing: true
  // };

  constructor() {
    super();
    this.state = {
      data: {},
      loading: true
    };
  }

  async componentDidMount() {
    const profile = await fetch("https://api.github.com/users/viicktur");
    const profileJSON = await profile.json();

    if (profileJSON) {
      this.setState({
        data: profileJSON,
        loading: false
      });
    }
  }
  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading.......</div>;
    }
    return (
      <div>
        <ul>
          <li>avatar_url: {data.avatar_url}</li>
          <li>html_url: {data.html_url}</li>
          <li>repos_url: {data.repos_url}</li>
          <li>name: {data.name}</li>
          <li>company: {data.company}</li>
          <li>location: {data.location}</li>
          <li>email: {data.email}</li>
          <li>bio: {data.bio}</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
