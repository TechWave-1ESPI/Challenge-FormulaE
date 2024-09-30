import styled from 'styled-components';

export const DriversStyle = styled.section`
    section {
        cursor: pointer;
    }

    .drivers-title {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .drivers-title span {
        color: blue;
    }

    section img {
        border-radius: 20px;
        width: 400px;
    }
    
    .slick-slide div {
        margin: 0 1rem;
    }

    .box {
        max-width: 400px;
    }

    .slick-dots li button:before {
        font-size: 12px;
        color: #d1d1d1; /* Default color */
    }

    .slick-dots li.slick-active button:before {
        color: blue; /* Active dot color */
    }

    .custom-arrow {
        display: block;
        font-size: 40px; /* Bigger size */
        color: #0000ff89; /* Customize the arrow color */
        z-index: 1;
        cursor: pointer;
    }

    /* Right arrow (Next) positioning */
    .custom-arrow.custom-next {
        right: 20px; /* Adjust positioning */
    }

    /* Left arrow (Previous) positioning */
    .custom-arrow.custom-prev {
        left: 20px; /* Adjust positioning */
    }

    /* Optional: Add hover effect */
    .custom-arrow:hover {
        color: blue; /* Darker color on hover */
    }

    @media screen and (max-width: 600px) {
    .drivers-title {
        margin-left: 10px;
    }
    }
`;