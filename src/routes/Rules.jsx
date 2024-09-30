import {RulesSyle} from '../css/RulesStyle'
import Footer from '../components/Footer'

import Img1 from '../assets/rules/1.png'
import Img2 from '../assets/rules/2.png'
import Img3 from '../assets/rules/3.png'
import Img4 from '../assets/rules/4.png'
import Img5 from '../assets/rules/5.png'
import Img6 from '../assets/rules/6.png'

const Rules = () => {
    return(
        <RulesSyle>
            <section class="rules">
                <div class="interface">
                    <div class="rules-title">
                        <h2>FORMULA <span>E</span> RULES</h2>
                    </div>
                    <div class="rules-content">
                        <div class="flex card">
                            <img src={Img1} alt="carros formula e"/>
                            <div class="rules-text">
                                <h3>Estrutura da Corrida</h3>
                                <p>A Fórmula E segue uma estrutura de corrida única e emocionante. Cada evento é composto por uma única sessão de prática, qualificação e a corrida principal, tudo em um único dia. A qualificação é dividida em grupos, com os pilotos competindo contra o relógio para garantir a melhor posição no grid de largada. A corrida principal dura 45 minutos mais uma volta, com os pilotos competindo em circuitos de rua desafiadores em cidades ao redor do mundo.</p>
                            </div>
                        </div>

                        <div class="flex card">
                            <div class="rules-text">
                                <h3>Pontuação e Campeonato</h3>
                                <p>Os pontos na Fórmula E são atribuídos de acordo com a posição final de cada piloto na corrida. O vencedor recebe 25 pontos, o segundo lugar recebe 18 pontos e assim por diante até o décimo lugar, que recebe 1 ponto. Pontos adicionais são concedidos para o pole position e o piloto que fizer a volta mais rápida na corrida. O piloto com o maior número de pontos no final da temporada é coroado o campeão da Fórmula E.</p>
                            </div>
                            <img src={Img2} alt="carros formula e"/>
                        </div>

                        <div class="flex card">
                            <img src={Img3} alt="carros formula e"/>
                            <div class="rules-text">
                                <h3>Fanboost</h3>
                                <p>O Fanboost é uma característica única da Fórmula E que permite aos fãs votarem em seus pilotos favoritos para ganhar um aumento extra de potência durante a corrida. Os cinco pilotos mais votados recebem um boost de potência que pode ser usado em uma janela específica da corrida, permitindo ultrapassagens estratégicas e momentos emocionantes.</p>
                            </div>
                        </div>

                        <div class="flex card">
                            <div class="rules-text">
                                <h3>Attack Mode</h3>
                                <p>O Modo Ataque é outra inovação exclusiva da Fórmula E, onde os pilotos podem ganhar um aumento temporário de potência ao passar por uma zona de ativação específica na pista. Os pilotos devem planejar estrategicamente quando usar o Modo Ataque para maximizar sua vantagem durante a corrida.</p>
                            </div>
                            <img src={Img4} alt="carros formula e"/>
                        </div>

                        <div class="flex card">
                            <img src={Img5} alt="carros formula e"/>
                            <div class="rules-text">
                                <h3>Sustentabilidade</h3>
                                <p>A sustentabilidade é um pilar central da Fórmula E. A série utiliza carros elétricos para promover a mobilidade sustentável e reduzir a pegada de carbono. Além disso, a Fórmula E trabalha para minimizar o impacto ambiental de seus eventos, implementando práticas sustentáveis e incentivando a inovação tecnológica para um futuro mais verde.</p>
                            </div>
                        </div>

                        <div class="flex card lastcard">
                            <div class="rules-text">
                                <h3>Carros e Tecnologia</h3>
                                <p>Os carros da Fórmula E são máquinas de alta tecnologia, projetadas para maximizar a eficiência e o desempenho. Equipados com baterias de última geração e sistemas de recuperação de energia, os carros são capazes de atingir velocidades impressionantes enquanto mantêm a sustentabilidade como prioridade.</p>
                            </div>
                            <img src={Img6} alt="carros formula e"/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </RulesSyle>
    )
}

export default Rules