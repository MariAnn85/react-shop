import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";



const Nav = () => {
  const Nav = styled.nav`
  .navbar-lists{
    display: flex;
    gap: 4,8rem;
    align-items: center;
    
  .navbar-link {
    &:link,
    &:visited {
     display: inline-block;
     text-decoration:none;
     font-size: 1,8rem;
     font-weight: 500;
     text-transorf: uppercase;
     color: ${({ theme }) => theme.colors.black};
     transition: color 0,3s linear;
    }
    
    &:hover,
    &:active {
 color: ${({ theme }) => theme.colors.belper};
    }
  }
  }
    .mobile-navbar-btn{}
    
    .cart-trolley {
    position: relative;
    font-size: 5,2rem;
  }
   .cart-total--item{
     width: 4,2rem;
     height: 4,2rem;
     font-size: 2rem;
   }
  }
  
  
}

return <Nav>
<div></div>
</Nav>;
};

export default Nav;