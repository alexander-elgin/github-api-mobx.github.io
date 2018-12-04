import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.scss';

const HelloWorld = ({ title }) => (
  <div className={style['hello-world']}>{title}</div>
);

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
