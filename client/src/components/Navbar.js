import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default () => {
  return (
    <Menu>
      <Link to="/">
        <Menu.Item name="Home">Home</Menu.Item>
      </Link>
      <Link to="/jeopardy">
        <Menu.Item name="Jeopardy">Jeopardy</Menu.Item>
      </Link>
    </Menu>
  );
};
