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

    .arrow {
    color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    transform: translateY(-50%);
    transition: color .3s ease;
    }

    .arrow:hover {
    color: #0000ff; /* Color on hover */
    }

    .arrow.active {
    color: #0054fc; /* Color when active */
    }

    .arrow.next {
        right: 20px;
    }

    .arrow.prev {
        left: 40px;
    }

    @media screen and (max-width: 600px) {
    .drivers-title {
        margin-left: 10px;
    }
    }
`;