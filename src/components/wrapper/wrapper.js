import styled from 'styled-components'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 3px;
  width: 100%;
  max-width: 1020px;
  border-bottom: 1px solid #ebf2f6;
  word-wrap: break-word;
  background-color: #fff;
  margin: 0px auto 30px auto;
  top: -100px;
  padding: 5px;
  box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1);
  min-height: 150px;

  @media (max-width: 780px) {
    width: 90%;
    padding: 25px;
  }
`

export default Wrapper
