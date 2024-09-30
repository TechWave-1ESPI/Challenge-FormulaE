import styled from 'styled-components';

export const DriversStyle = styled.section`
    section {
        cursor: pointer;
    }

    .drivers-title h2{
        margin-top: 20px;
        font-weight: 500;
        margin-bottom: 50px;
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
    color: #001c777d;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: -100px;
    margin-left: -100px;
    z-index: 1;
    position: absolute;
    top: 50%;
    width: 50px;
    transform: translateY(-50%);
    transition: color .3s ease;
    }

    .arrow:hover {
    color: #0054fc; /* Color on hover */
    }

    .arrow.active {
    color: #0054fc; /* Color when active */
    }

    .arrow.next {
        right: 0px;
    }

    .arrow.prev {
        left: 0px;
    }

    @media screen and (max-width: 600px) {
    .drivers-title {
        margin-left: 60px;
    }

    .arrow{
        margin-left: 0;
        margin-right: 0;
    }

    .arrow.next {
        right: -13px;
    }

    }
`;