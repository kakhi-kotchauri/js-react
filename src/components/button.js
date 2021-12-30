import react from "react";
import styled from "styled-components";




export const Styledbutton = (props) => {
  const{children, onck, ...rest} = props

  const Mybutton = styled.button`
  color: ${rest.color};
  background: ${rest.backgroundColor};
  width: ${rest.width};
  height: ${rest.height};
  border-radius: ${rest.radius};
  margin: ${rest.margin};
  font-size: ${rest.font};
  display: ${rest.display};
  justify-content: center;
  align-items: center;
  vertical-align: top;
`;

    return (
      <div style={{display:rest.pardisplay, justifyContent: 'center'}}>
        <Mybutton onClick={onck}>{children}</Mybutton>
        </div>
    )
}