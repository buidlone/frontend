import {
  Buidl1SectionWrapper,
  InfoCard,
  Text,
  TextWrapper,
  Title,
  AboutLink,
} from './styled';

const Buidl1Section = () => {
  return (
    <Buidl1SectionWrapper>
      <InfoCard className='longCard'>
        <TextWrapper>
          <Title>Buidl 1</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit
            orci, tincidunt nec vulputate a, porta nec tellus. Praesent id
            congue mi. Suspendisse lacinia dui ex, at facilisis erat imperdiet
            a. Donec in interdum odio, sit amet interdum leo. Quisque vel tempus
            metus, quis iaculis tellus. Integer non metus ante. Suspendisse
            pulvinar posuere lectus a finibus. Fusce sodales gravida risus, sed
            tempor arcu ultrices id. Aliquam massa dolor, facilisis at libero
            et, posuere ultricies nisi.
          </Text>
        </TextWrapper>
      </InfoCard>
      <InfoCard>
        {' '}
        <TextWrapper>
          <Title>About Us</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit
            orci, tincidunt nec
          </Text>
          <AboutLink href='https://docs.buidl.one/'>WhitePaper</AboutLink>
          <AboutLink>www.buidl.com</AboutLink>
          <AboutLink href='https://www.superhow.com/'>superhow.com</AboutLink>
        </TextWrapper>
      </InfoCard>
      <InfoCard>
        {' '}
        <TextWrapper>
          <Title>Mission</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit
            orci, tincidunt nec vulputate a, porta nec tellus. Praesent id
            congue mi. Suspendisse lacinia dui ex, at facilisis erat imperdiet
            a. Donec in interdum odio, sit amet
          </Text>
        </TextWrapper>
      </InfoCard>
      <InfoCard>
        {' '}
        <TextWrapper>
          <Title>Vision</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit
            orci, tincidunt nec vulputate a, porta nec tellus. Praesent id
            congue mi. Suspendisse lacinia dui ex, at facilisis erat imperdiet
            a. Donec in interdum odio, sit amet
          </Text>
        </TextWrapper>
      </InfoCard>
      <InfoCard>
        {' '}
        <TextWrapper>
          <Title>Vision</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin velit
            orci, tincidunt nec vulputate a, porta nec tellus. Praesent id
            congue mi. Suspendisse lacinia dui ex, at facilisis erat imperdiet
            a. Donec in interdum odio, sit amet
          </Text>
        </TextWrapper>
      </InfoCard>
    </Buidl1SectionWrapper>
  );
};

export default Buidl1Section;
