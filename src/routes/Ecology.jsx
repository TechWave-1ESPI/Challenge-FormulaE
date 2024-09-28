import {EcologySyle} from '../css/EcologyStyle'
import Img1 from '../assets/ecology/1.png'
import Img2 from '../assets/ecology/2.png'
import Img3 from '../assets/ecology/3.png'
import Img4 from '../assets/ecology/4.png'
import Img5 from '../assets/ecology/5.png'
import Img6 from '../assets/ecology/6.png'
import Img7 from '../assets/ecology/7.png'


const Ecology = () => {
    return(
        <EcologySyle>
            <section class="ecology">
                <div class="interface">
                    <div class="ecology-title">
                        <h2>FORMULA <span>E</span> ECOLOGY</h2>
                    </div>
                    <div class="ecology-content">
                        <div class="flex card card1">
                            <img src={Img1} alt="carros formula e"/>
                            <div class="ecology-text">
                                <h3>Sustentabilidade na Fórmula E</h3>
                                <p>A Fórmula E é mais do que apenas corridas de carros elétricos; é um movimento global para promover a sustentabilidade e combater as mudanças climáticas. Desde sua criação, a Fórmula E se dedicou a inovar e implementar práticas ecológicas que ajudam a reduzir a pegada de carbono e incentivar o uso de tecnologias limpas.</p>
                            </div>
                        </div>

                        <div class="flex card card2">
                            <div class="ecology-text">
                                <h3>Carros Elétricos e Zero Emissões</h3>
                                <p>Os carros da Fórmula E são totalmente elétricos, o que significa que eles não emitem gases poluentes durante as corridas. Isso não só ajuda a melhorar a qualidade do ar nas cidades onde as corridas são realizadas, mas também demonstra o potencial dos veículos elétricos como uma alternativa viável e sustentável aos carros a combustão.</p>
                            </div>
                            <img src={Img2} alt="zero emissões"/>
                        </div>

                        <div class="flex card card3">
                            <img src={Img3} alt="carros formula e"/>
                            <div class="ecology-text">
                                <h3>Reciclagem e Reutilização de Materiais</h3>
                                <p>A Fórmula E trabalha para minimizar o desperdício através de práticas de reciclagem e reutilização de materiais. Desde componentes dos carros até os materiais usados nas pistas e instalações, a sustentabilidade está no centro das operações.</p>
                            </div>
                        </div>

                        <div class="flex card card4">
                            <div class="ecology-text">
                                <h3>Energias Renováveis</h3>
                                <p>A eletricidade usada para carregar os carros da Fórmula E muitas vezes vem de fontes de energia renováveis, como solar, eólica e hidrelétrica. Isso garante que a pegada de carbono das corridas seja ainda menor, promovendo o uso de energias limpas em todo o mundo.</p>
                            </div>
                            <img src={Img4}alt="carros formula e"/>
                        </div>

                        <div class="flex card card5">
                            <img src={Img5} alt="carros formula e"/>
                            <div class="ecology-text">
                                <h3>Compensação de Carbono</h3>
                                <p>A Fórmula E é a primeira série de corridas a ser certificada como carbono zero pela FIA. Isso significa que todas as emissões de carbono associadas às corridas são compensadas através de iniciativas de reflorestamento e projetos de energia renovável ao redor do mundo.</p>
                            </div>
                        </div>

                        <div class="flex card card6">
                            <div class="ecology-text">
                                <h3>Iniciativas Educacionais e de Conscientização</h3>
                                <p>Além das corridas, a Fórmula E investe em programas educacionais e campanhas de conscientização para promover a importância da sustentabilidade. Eventos paralelos às corridas incluem workshops, palestras e exposições que destacam inovações verdes e a importância de um estilo de vida sustentável.</p>
                            </div>
                            <img src={Img6} alt="carros formula e"/>
                        </div>

                        <div class="footer">
                            <div class="flex card card7 lastcard">
                            <img src={Img7} alt="carros formula e"/>
                                <div class="ecology-text">
                                    <h3>Parcerias com ONGs e Instituições de Pesquisa</h3>
                                    <p>A Fórmula E colabora com diversas ONGs e instituições de pesquisa para desenvolver novas tecnologias sustentáveis e promover políticas ecológicas. Essas parcerias ajudam a avançar o conhecimento e a prática da sustentabilidade no setor automotivo e além.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </EcologySyle>
    )
}

export default Ecology