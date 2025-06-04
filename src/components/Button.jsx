// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function Button(props) {
    return (
        <button 
        css={css`
            background-color: ${props.color};
            padding: 20px 50px;
            border: none;
            borderRadius: 5px;
            color: white;
            margin: 20px
            `
        } >
        Button
    </button>
    );
}
