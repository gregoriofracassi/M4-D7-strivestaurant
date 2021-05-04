import { ListGroup } from "react-bootstrap"
import React from "react"

class DishComments extends React.Component {
  // props.dish is the whole object
  render() {
    return (
      <div className={`mt-${this.props.marginTop}`}>
        <h2>Comments for {this.props.dish.name}</h2>
        {!this.props.dish ? (
          <p>non valid dish prop</p>
        ) : (
          <ListGroup>
            {this.props.dish.comments.map((c) => (
              <ListGroup.Item key={c.id}>
                "{c.comment}" from {c.author}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    )
  }
}

export default DishComments
