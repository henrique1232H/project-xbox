import styled from 'styled-components'
import iconXbox from "../../assets/xbox.svg"
import perfilIcon from "../../assets/perfil.png"

const Header = styled.header`
    position: absolute;
    z-index: -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    min-height: 10vh;
    width: 100%;
    background: rgba(0,0,0,0.9);
    padding: 2rem 4rem;

`

const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

const Button = styled.div`
    padding: 1rem 2rem;
    color: #fff;
    font-weight: 800;
    font-size: 1.4rem;
    cursor: pointer;
    border-radius: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;


    &:hover {
        background: #c8b1b177;
    }
`

const Img = styled.img`
    height: 6vh;
    border-radius: 1.5rem;

    cursor: pointer;

`

const Span = styled.span`
    color: rgba(0,0,0,0.9);
    background: #fff;
    font-size: 1rem;
    padding: 0 0.2rem;
    border-radius: 2px;

`

const Input = styled.input`
    background: rgba(0,0,0,0.2);
    border-radius: 5px;
    padding: 1rem 4rem;
    color: #fff;
    border: 1px solid #ccc;
`

export default function Menu() {

    return (
        <Header>
            <FlexDiv>
                <Img src={iconXbox} alt="" />

                <Button>CLOUD GAMING <Span>BETA</Span></Button>
            </FlexDiv>

            <FlexDiv>
                <Input type="text" placeholder='Buscar Jogo' />
                <Img src={perfilIcon} alt="" />
            </FlexDiv>
            
        </Header>
    )
}