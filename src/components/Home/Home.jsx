import './Home.css'
import Logo from '../../images/Logo.svg'

const Home = ({theme}) => {

    const toBottom = () => {
        window.scrollTo(0, 500)
    }
    return (/* #010409 */
        <>

            <div className='background' style={ { background:  theme ? '#161B22' : '#d4d4d4'}}>

                <div className="bg-content">
                    <img src={Logo} width={'80px'} alt="" />
                    <h2 className='title'  style={ { color:  theme ? '#d4d4d4' : '#d4d4d4', textShadow:'3px 2px 10px #11111197'}}  data-aos="flip-down">vitor felix</h2>
                    <button onClick={toBottom} className='button-view' style={ { background:  theme ? '#fff' : '#161B22', border: '1px solid #000000', color:  theme ? '#161B22' : '#fff'}}>Ver projetos</button>
                </div>
            </div>
        </>
    );
}

export default Home;