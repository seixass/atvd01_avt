import CardLogin from './CardLogin/CardLogin'
import Body from './Body/Body.jsx'
import imgBody from './assets/images/Fundo.png'

const App = () => {
    return(
        <section>
            <Body 
            imagem={imgBody}
            tittle="fundo"
            />
            <CardLogin/>
        </section>
    )
}

export default App;