import styled from 'styled-components'

export const DashboardStyle = styled.section `

.dashboard{
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* ESTILIZAÇÃO DA NAV LATERAL */
aside{
    padding: 25px 35px;
    background-color: #0017EB;
    border-radius: 0px 15px 15px 0px;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 5px 0px 8px #19191963;
}

.welcome-text p{
    font-size: 18px;
}

.welcome-text h2{
    font-weight: 500;
}

.nav{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.option-nav{
    height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: transparent;
    color: white;
    border: none;
    border-radius: 12px;
    transition: .2s ease;
    gap: 15px;
    padding-left: 10px;
    cursor: pointer;
}

.option-nav h2{
    padding-top: 5px;
    font-size: 28px;
}

.option-nav h1{
    font-size: 20px;
    font-weight: 500;
}

.option-nav:hover{
    background-color: white;
    color: black;
}

.option-nav:hover .icon-sensor{
    color: red;
}

.logout h2{
    padding-top: 5px;
    font-size: 25px;
}

.logout h1{
    font-size: 18px;
}

/* ESTILIZAÇÃO DOS ÍCONES */
.cars-icons{
    width: 23vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /*margin-right: 7vw;
    padding: 50px;*/
    background-color: #f3f3f3;
    border-radius: 15px;
    box-shadow: 0 0 8px #1919193e;
}

.middle{
    display: flex;
    align-items: center;
}

#car-dashboard{
    width: 225px;
}

.icon{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #0017EB;
}

/* ESTILIZAÇÃO DOS DADOS */
.data{
    width: 43vw;
    height: 80vh;
    margin-right: 7vw;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f3f3f3;
    border-radius: 15px;
    box-shadow: 0 0 8px #1919193e;
}

.car-data{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.sensor-values h1{
    font-size: 24px;
}

.sensor-values h2{
    font-size: 30px;
}

.sensor-values span{
    color: grey;
    font-size: 20px;
}

.title{
    font-size: 21px;
    text-align: center;
}

.obstacles-data{
    height: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.right-side{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.last-row{
    display: flex;
    flex-direction: column;
    justify-content: end;
}

.align{
    width: 40%;
}

.alert{
    color: red;
}

`