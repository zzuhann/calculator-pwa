import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 300px;
  outline: 1px black solid;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const ResultBox = styled.div`
  height: 70px;
`;

const DisplayResultBox = () => {
  return <ResultBox />;
};

const LeftButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% / 4 * 3);
`;

const Button = styled.div`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const LeftButton = styled(Button)`
  width: calc(100% / 3);
`;

const RightButton = styled(Button)`
  width: 100%;
`;

const EqualButton = styled.div`
  font-size: 22px;
  font-weight: bold;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 4);
`;

const CalcButtons = () => {
  return (
    <ButtonsContainer>
      <LeftButtons>
        <LeftButton>+</LeftButton>
        <LeftButton>-</LeftButton>
        <LeftButton>x</LeftButton>
        <LeftButton>7</LeftButton>
        <LeftButton>8</LeftButton>
        <LeftButton>9</LeftButton>
        <LeftButton>4</LeftButton>
        <LeftButton>5</LeftButton>
        <LeftButton>6</LeftButton>
        <LeftButton>1</LeftButton>
        <LeftButton>2</LeftButton>
        <LeftButton>3</LeftButton>
        <LeftButton>0</LeftButton>
        <LeftButton>.</LeftButton>
        <LeftButton>C</LeftButton>
      </LeftButtons>
      <RightButtons>
        <RightButton>÷</RightButton>
        <EqualButton>=</EqualButton>
      </RightButtons>
    </ButtonsContainer>
  );
};

const Calculator = () => {
  return (
    <Container>
      <DisplayResultBox />
      <CalcButtons />
    </Container>
  );
};

export default Calculator;
