import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Work1Title">
      <Container>
        <Title>
          Work1Title <Badge>2016</Badge>
        </Title>
        <P>A ~~~ app with ~~ features.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://localhost:3000">
              https://localhost:3000
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Andorid</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://blog.adfasdf.com">
              description on blog <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/inkdrop_01.png" alt="work1Title" />
        <WorkImage src="/images/works/inkdrop_02.png" alt="work1Title" />
      </Container>
    </Layout>
  )
}

export default Work
