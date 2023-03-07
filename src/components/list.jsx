import React, { Component } from "react";
import ListItem from "./listitem";
export default class List extends Component {
  render() {
    const { todo, onDelete } = this.props;
    return (
      <ul>
        {todo.map((item, index) => {
          return (
            <ListItem
              item={item.todo}
              key={index}
              handleDelete={() => {
                onDelete(index);
              }}
            />
          );
        })};
      </ul>
    );
  }
}
