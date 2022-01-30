import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  SimpleGrid,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Korea!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Peter Alfie
            </Heading>
            <p>Web Fullstack Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile-image.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant={'section-title'}>
            Work
          </Heading>
          <Paragraph>
            Work Paragraph blah blah called{' '}
            <NextLink href="/works/inkdrop">
              <Link>Inkdrop</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant={'section-title'}>
            Bio
          </Heading>
          <BioSection>
            <BioYear>19XX</BioYear>
            Born in Korea
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Learning Next.js and Chakra-ui by cloning craftzdog site
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant={'section-title'}>
            I Love
          </Heading>
          <Paragraph>Music, Blockchain, Investment</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/alfie1104" target="_blank">
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @peter_alfie
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/alfie1104" target="_blank">
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @peter_alfie
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/alfie1104" target="_blank">
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @peter_alfie
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/alfie1104" target="_blank">
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  @peter_alfie
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/devaslife"
              title="Dev as Life"
              thumbnail={thumbYouTube}
            >
              CraftzDog&apos;s Youtube Channel
            </GridItem>
            <GridItem
              href="https://www.inkdrop.app"
              title="Inkdrop"
              thumbnail={thumbInkdrop}
            >
              CraftzDog&apos;s Note app(Inkdrop)
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
