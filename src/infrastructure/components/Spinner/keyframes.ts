import { keyframes } from 'styled-components'

export const dash = keyframes`
    0% {
        stroke-dasharray: 0, 9.25rem;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 5.5rem, 9.25rem;
        stroke-dashoffset: -2.25rem;
    }
    100% {
        stroke-dasharray: 5.5rem, 9.25rem;
        stroke-dashoffset: -7.75rem;
    }
`

export const rotate = keyframes`
    100% { 
        transform: rotate(360deg);
    }
`
