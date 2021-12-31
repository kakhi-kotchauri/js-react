import react from "react";
import styled from "styled-components";




export const Styledbutton = (props) => {
  const{children, onck, ...rest} = props

  const Mybutton = styled.button`
  color: ${rest.color || 'red'}  ;
  background: ${rest.backgroundColor || 'white'};
  width: ${rest.width || '5vw'};
  height: ${rest.height || '2vw'};
  border-radius: ${rest.radius || '0.3vw'};
  margin: ${rest.margin || '0vw 0vw 0vw 0vw'};
  font-size: ${rest.font || '1.5vw'};
  display: ${rest.display || 'inline-block'};
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


export const Buttonv1 = (props) => {
  const{children, onck, ...rest} = props

  const Mybutton = styled.button`
  color: ${rest.color || 'red'}  ;
  background: ${rest.backgroundColor || 'white'};
  width: ${rest.width || '10vw'};
  height: ${rest.height || '10vw'};
  border-radius: ${rest.radius || '0.3vw'};
  margin: ${rest.margin || '1vw 0vw 3vw 3vw'};
  font-size: ${rest.font || '9vw'};
  display: ${rest.display || 'inline-flex'};
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
