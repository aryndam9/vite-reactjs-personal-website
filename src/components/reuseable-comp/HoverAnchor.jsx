import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  display: inline; 
  color: transparent; 
  text-decoration: none;
  margin-left: 10px; 
  transition: color 0.3s ease-in-out; 

  &:hover {
    color: rgba(255, 168, 106, 0.9); 
  }
`;

const HoverAnchor = ({ href, label, ariaLabel }) => {
  return (
    <StyledAnchor href={href} aria-label={ariaLabel}>
      {label}
    </StyledAnchor>
  );
};

export default HoverAnchor;
