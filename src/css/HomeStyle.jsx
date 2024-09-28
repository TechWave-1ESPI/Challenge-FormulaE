import styled from 'styled-components'



export const HomeStyle = styled.section `
    position: relative;
    width: 100%;
    height: 100vh; /* Full viewport height */
    overflow: hidden; /* Prevent overflow */

    /* Video Background Styling */
    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensures the video covers the entire area */
        z-index: -1; /* Place the video behind all content */
    }

    .inicio {
        position: relative; /* Relative to the section */
        width: 100%;
        height: 100%;
        color: white;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        z-index: 1; /* Ensure this is above the video */
        padding-top: 15%; /* Add padding to keep content away from edges */
        padding-bottom: 12%; /* Add padding to keep content away from edges */
        margin-top: -3%;
    }

    .inicio h1 {
        margin-top: 80px;
        font-size: 90px;
        font-weight: 800;
    }

    .inicio h1 span {
        color: #0000ff;
    }

    .inicio p {
        font-size: 20px;
    }

    .inicio button {
        margin-top: 30px;
        font-size: 20px;
        padding: 20px 30px;
        border: 2px solid white;
        background-color: #0000ff;
        color: white;
        border-radius: 40px;
        transition: 0.3s;
        cursor: pointer;
    }

    .inicio button:hover {
        transform: scale(1.03);
    }

    .last-race {
        text-decoration: none;
        text-align: center;
        z-index: 1; /* Ensure this is above the video */
    }

    .last-race a {
        color: white;
        text-decoration: none;
    }

    .last-race .flex {
        margin-top: 150px;
        gap: 10px;
    }

    .last-race .play-icon {
        margin-top: -0.3%;
        font-size: 30px;
        color: #0077ff;
    }
`;