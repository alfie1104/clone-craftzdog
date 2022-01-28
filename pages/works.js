import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWork1 from '../public/images/works/inkdrop_eyecatch.png'
import thumbWork2 from '../public/images/works/walknote_eyecatch.png'
import thumbWork3 from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbWork4 from '../public/images/works/menkiki_eyecatch.png'
import thumbWork5 from '../public/images/works/modetokyo_eyecatch.png'
import thumbWork6 from '../public/images/works/styly_eyecatch.png'
import thumbWork7 from '../public/images/works/pichu2_eyecatch.png'
import thumbWork8 from '../public/images/works/freedbtagger_eyecatch.png'
import thumbWork9 from '../public/images/works/amembo_eyecatch.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="work1Title"
            title="work1Title"
            thumbnail={thumbWork1}
          >
            Web description blah blah
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="work2Title"
            title="work2Title"
            thumbnail={thumbWork2}
          >
            Tool description blah blah
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="work3Title"
            title="work3Title"
            thumbnail={thumbWork3}
          >
            An app the suggests ~~~ based on ~.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="work4Title"
            title="work4Title"
            thumbnail={thumbWork4}
          >
            An app the suggests ~~~ based on ~.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="work5Title"
            title="work5Title"
            thumbnail={thumbWork5}
          >
            description on work5
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="work6Title"
            title="work6Title"
            thumbnail={thumbWork6}
          >
            description on work6
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="work7Title"
            title="work7Title"
            thumbnail={thumbWork7}
          >
            description on work7
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="work8Title"
            title="work8Title"
            thumbnail={thumbWork8}
          >
            description on work8
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="work9Title"
            title="work9Title"
            thumbnail={thumbWork9}
          >
            description on work9
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
