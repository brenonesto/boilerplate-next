import * as s from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <s.Wrapper>
    <s.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <s.Title>{title}</s.Title>
    <s.Description>{description}</s.Description>
    <s.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </s.Wrapper>
)

export default Main
