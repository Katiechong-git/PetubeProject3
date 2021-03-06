import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import Cookies from "universal-cookie";
import NavigationBar from "./NavigationBar";
import Jumbo from "./Jumbotron.js";
import Button from "react-bootstrap/Button";
import "./style/singlePages.css";

class SinglePages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      display: false,
      userToken: "",
      enableComment: "",
      comment: "",
      votes: 0,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const cookies = new Cookies();
    const userToken = cookies.get("pwLoggedIn");
    this.setState({
      userToken
    });
    axios
      .get("/videos/getContent", {
        params: {
          id: id,
        },
      })
      .then((response) => {
        const data = response.data;
        this.setState({
          id: data.id,
          name: data.name,
          url: data.url,
          votes: data.votes,
          display: true,
          userToken: userToken,
          enableComment:
            userToken !== undefined && userToken !== null && userToken !== "",
          comment: "",
        });
      });
  }

  handleCommentOnChange(newValue) {
    this.setState({
      comment: newValue,
    });
  }

  refreshComments() {
    this.comments_child.getCommonents();
  }

  postData(url, data) {
    console.log(data);
    return fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data),
      // body data type must match "Content-Type" header
    }).then((response) => response.json()); // parses response to JSON
  }

  updateVotes(event) {
    event.preventDefault();
    console.log(this.state.votes);
    this.postData("/videos/updateVotes", {
      id: this.state.id,
      votes: this.state.votes + 1,
    }).then((res) => {

      if (res.code === 200) {
        this.setState({
          votes: this.state.votes + 1,
        });
      }
    });
  }

  render() {
    let displayContent = null;
    if (this.state.display) {
      displayContent = (
        <div style={{ "textAlign": "center" }}>
          <Row>
            <Col className={"text-center my-4"} lg={"12"}>
              <h1>{this.state.name}</h1>
            </Col>
          </Row>
          <iframe
            width="990"
            height="600"
            src={this.state.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <Row className="my-2">
            <Button
              className="mx-auto"
              variant="outline-danger"
              onClick={this.updateVotes.bind(this)}
            >
              <span>
                👍&nbsp;
                {/* Like */}
                {this.state.votes}
              </span>
            </Button>
          </Row>
          {/* <hr /> */}
          <CommentForm
            videoId={this.state.id}
            enableComment={this.state.enableComment}
            comment={this.state.comment}
            userToken={this.state.userToken}
            refreshComments={() => this.refreshComments()}
            commentOnChange={(value) => this.handleCommentOnChange(value)}
          />
          {/* <hr /> */}
          <Comments ref={child => this.comments_child = child} videoId={this.state.id} userToken={this.state.userToken} />
        </div>
      );
    } else {
      displayContent = (
        <Row>
          <Col className={"text-center my-4"} lg={"12"}>
            <h1>Waiting...</h1>
          </Col>
        </Row>
      );
    }
    return (
      <div>
        <NavigationBar />
        <Jumbo />

        <Container>{displayContent}</Container>
      </div>
    );
  }
}

SinglePages.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default SinglePages;
