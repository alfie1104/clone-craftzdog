import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center,
  Heading,
  UnorderedList,
  Box
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Work4Title">
      <Container>
        <Title>
          Work4Title <Badge>2015</Badge>
        </Title>
        <P>A ~~~ app with ~~ features.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Presentation</Meta>
            <Link href="http://localhost:3000">
              asdfasdfasd <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="http://localhost:3000">
              first blog post <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="http://localhost:3000">
              Second plog post <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>

        <UnorderedList my={4}>
          <ListItem>
            <Link href="http://localhost:3000">
              <Badge mr={2}>asdfa news</Badge>
              asfasfasdfads
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Link href="http://localhost:3000">
              <Badge mr={2}>Magazine</Badge>
              adfafasf
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>

        <Box>
          <iframe
            src="http://player.vimeo.com/video/146373709"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
          />
        </Box>
        <WorkImage
          src="/images/works/the-four-painters_eyecatch.jpg"
          alt="work4Title"
        />

        <WorkImage
          src="/images/works/the-four-painters_01.jpg"
          alt="work4Title"
        />
        <WorkImage
          src="/images/works/the-four-painters_02.jpg"
          alt="work4Title"
        />
      </Container>
    </Layout>
  )
}

export default Work
