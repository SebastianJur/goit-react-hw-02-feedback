import { Component } from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <section className={css.section}>
        <h2 className={css.title}>{title}</h2>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;