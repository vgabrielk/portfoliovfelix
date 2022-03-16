import './Footer.css'

const Footer = ({theme}) => {

    const socials = [
        {
            title: 'Github',
            link: 'https://github.com/vgabrielk'
        },
        {
            title: 'Linkedin',
            link: 'https://github.com/vgabrielk'
        },
    ]

    return (
        <>
            <div className="footer" style={ { background:  theme ? '#161B22' : '#d4d4d4', boxShadow: '-10px -10px 32px #0000003d'}}>
                <div className="footer-content">
                    <nav>
                        <ul>
                            {socials.map((social) => (
                                <a style={ { color:  theme ? '#d4d4d4' : '#161B22'}} href={social.link} key={social.title}>
                                    <li>{social.title}</li>
                                </a>
                            ))}
                        </ul>
                        <p style={ { color:  theme ? '#d4d4d4' : '#161B22'}} >2020 © Vitor Felix - Desenvolvedor front end</p>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Footer;