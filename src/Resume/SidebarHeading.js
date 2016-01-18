import React, { PropTypes } from 'react';

const SidebarHeading = ({ children, align = 'left' }) => (
  <h1 style={{
    ...style,
    textAlign: align,
  }}>
    {children}
  </h1>
);

const style = {
  paddingTop: '0.25rem',
  paddingBottom: '0.25rem',
};

SidebarHeading.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
};

export default SidebarHeading;
