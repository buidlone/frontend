import AssetsSection from "../src/components/assetsSection";
import { AssetsHeader } from "../src/components/assetsSection/styled";
import { Container, BgImage } from "../styles/Container";

const Assets = () => {
  return (
    <>
      <BgImage isFixed />
      <Container>
        <AssetsHeader>My assets</AssetsHeader>
        <AssetsSection />
      </Container>
    </>
  );
};

export default Assets;
