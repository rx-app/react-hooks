import React, { useReducer } from 'react';
import ShowArea from './ShowArea';
import Buttons from './Buttons';
import Container from './Color';



function Example6(){
    return (
        <div>
            <Container>
                <ShowArea />
                <Buttons />
            </Container>
        </div>
    )
}

export default Example6