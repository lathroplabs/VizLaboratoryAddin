import * as React from "react";

export default class Header extends React.Component {
  render() {
    const { title, logo, message } = this.props;

    return (
      <section className="ms-welcome__header ms-u-fadeIn500">
        <img width="90" height="90" src={logo} alt={title} title={title} />
      </section>
    );
  }
}
