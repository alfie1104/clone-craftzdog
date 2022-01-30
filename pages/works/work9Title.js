import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Center,
  Image,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Work9Title">
      <Container>
        <Title>
          Work9Title <Badge>2005-2008</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/amembo_icon.png" alt="icon" />
        </Center>
        <P>A ~~~ app with ~~ features.</P>
        <P>Second description</P>
        <UnorderedList ml={4} my={4}>
          <ListItem>Description 1</ListItem>
          <ListItem>Description 2</ListItem>
          <ListItem>Description 3</ListItem>
          <ListItem>Description 4</ListItem>
        </UnorderedList>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Andorid</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Last Update</Meta>
            <span>2008/03/23</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>

        <UnorderedList my={4}>
          <ListItem>
            <Link href="http://localhost:3000">
              <Badge mr={2}>adfaf</Badge>
              description
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/amembo_01.gif" alt="work9Title" />
          <WorkImage src="/images/works/amembo_02.gif" alt="work9Title" />
        </SimpleGrid>
        <WorkImage src="/images/works/amembo_03.jpg" alt="work9Title" />
        <WorkImage src="/images/works/amembo_04.jpg" alt="work9Title" />
      </Container>
    </Layout>
  )
}

export default Work
