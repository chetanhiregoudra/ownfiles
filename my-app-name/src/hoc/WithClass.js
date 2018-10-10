import React from 'react';

const withClass = (props) =>{
    console.log(props);
   return( <div className={props.classes}>
        {props.children}
    </div>
   );
}
    

export default withClass;