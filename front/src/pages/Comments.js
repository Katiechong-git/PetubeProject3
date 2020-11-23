import React from "react";
import axios from "axios";
// import { Row, Col } from "react-bootstrap";
import { Media } from "react-bootstrap";
import PropTypes from "prop-types";
import "./style/comments.css";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this.getCommonents();
  }
  getCommonents() {
    axios
      .get("/videos/getComments", {
        params: {
          videoId: this.props.videoId,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          comments: response.data,
        });
      });
  }
  deleteComment(id) {
    axios.get("/videos/removeComments", {
      params: {
        cid: id
      }
    }).then(r => {
      if(r.data.code === 200) {
        this.getCommonents();
      }
    });
  }

  handleDelete(e) {
    const id = e.target.dataset.id;
    this.deleteComment(id);
  }

  renderComments() {
    const userName = this.props.userToken;
    let content = null;
    if (this.state.comments.length <= 0) {
      content = <div></div>;
    } else {
      content = this.state.comments.map((value, index) => {
        return (
          <div className="comment-item" key={index}>
            {/* <hr /> */}
            {/* <Row>
              <Col col={"3"}>
                <h5>{value.userToken}</h5>
              </Col>
              <Col col={"3"}>
                <h5>{value.time}</h5>
              </Col>
            </Row>
            <Row className={"mb-3"}>
              <Col col={"12"}>
                <p>{value.comment}</p>
              </Col>
            </Row> */}

            <Media className="text-left">
              <Media.Body>
                <h5>{(new Date(value.time)).toLocaleString()}</h5>
                {/* <p>{JSON.stringify(value)}</p> */}
                <p>{value.comment}</p>
                {
                  userName === value.userToken ? <button data-id={value.id} onClick = {(e) => this.handleDelete(e)}>delete</button> : null
                }
              </Media.Body>
            </Media>
          </div>
        );
      });
    }
    return content;
  }

  render() {
    return this.renderComments();
  }
}

Comments.propTypes = {
  videoId: PropTypes.string.isRequired,
  userToken: PropTypes.string.isRequired,
};

export default Comments;
