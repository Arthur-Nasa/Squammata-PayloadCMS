import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import sharp from 'sharp'

// Coleções da Squammata e do ecossistema de blocos
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Posts } from './collections/Posts'
import { CaseStudies } from './collections/CaseStudies'
import { Services } from './collections/Services'
import { Inquiries } from './collections/Inquiries'
import { Pages } from './collections/Pages'
import { Projects } from './collections/Projects'
import { Team } from './collections/Team'
import { ReusableContent } from './collections/ReusableContent'

// Globals da Squammata e do tema Lumex
import { SiteSettings } from './globals/SiteSettings'
import { LocalSEO } from './globals/LocalSEO'
import { Header } from './globals/Header/config'
import { Footer } from './globals/Footer/config'
import { Blog } from './globals/Blog/config'
import { ServicesPage } from './globals/Services/config'
import { ProjectsPage } from './globals/Projects/config'
import { TeamPage } from './globals/Team/config'
import { General } from './globals/General/config'

// Blocos visuais modulares
import { Archive } from './blocks/ArchiveBlock/config'
import { Content } from './blocks/Content/config'
import { FormBlock } from './blocks/Form/config'
import { MediaBlock } from './blocks/MediaBlock/config'
import { HeroOne } from './blocks/HeroOne/config'
import { HeroTwo } from './blocks/HeroTwo/config'
import { HeroThree } from './blocks/HeroThree/config'
import { HeroFour } from './blocks/HeroFour/config'
import { HeroFive } from './blocks/HeroFive/config'
import { AboutUs } from './blocks/AboutUs/config'
import { AboutUsTwo } from './blocks/AboutUsTwo/config'
import { AboutUsThree } from './blocks/AboutUsThree/config'
import { AboutUsFour } from './blocks/AboutUsFour/config'
import { Counters } from './blocks/Counters/config'
import { CountersTwo } from './blocks/CountersTwo/config'
import { ServicesBlock } from './blocks/ServicesBlock/config'
import { ServicesTwo } from './blocks/ServicesTwo/config'
import { ServicesThree } from './blocks/ServicesThree/config'
import { ServicesFour } from './blocks/ServicesFour/config'
import { CallToAction } from './blocks/CallToAction/config'
import { TeamBlock } from './blocks/TeamBlock/config'
import { CallToAction2 } from './blocks/CallToAction2/config'
import { Subscribe } from './blocks/SubscribeBlock/config'
import { Portfolio } from './blocks/PortfolioBlock/config'
import { PortfolioTwo } from './blocks/PortfolioTwo/config'
import { PricesBlock } from './blocks/PricesBlock/config'
import { PricesTwo } from './blocks/PricesTwo/config'
import { IntroBlock } from './blocks/Intro/config'
import { PortfolioGrid } from './blocks/PortfolioGrid/config'
import { AboutProject } from './blocks/AboutProject/config'
import { AboutService } from './blocks/AboutService/config'
import { Features } from './blocks/Features/config'
import { FeaturesTwo } from './blocks/FeaturesTwo/config'
import { Faq } from './blocks/FaqBlock/config'
import { ReusableBlock } from './blocks/ReusableContent/config'
import { AboutTeam } from './blocks/AboutTeam/config'

import { plugins } from './plugins'
import { defaultLexical } from './fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' | Squammata CMS',
      icons: [{ rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' }],
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  editor: defaultLexical,
  blocks: [
    Content,
    MediaBlock,
    Archive,
    FormBlock,
    HeroOne,
    HeroTwo,
    HeroThree,
    HeroFour,
    HeroFive,
    AboutUs,
    AboutUsTwo,
    AboutUsThree,
    AboutUsFour,
    Counters,
    CountersTwo,
    ServicesBlock,
    ServicesTwo,
    ServicesThree,
    ServicesFour,
    CallToAction,
    TeamBlock,
    CallToAction2,
    Subscribe,
    Portfolio,
    PortfolioTwo,
    PricesBlock,
    PricesTwo,
    IntroBlock,
    PortfolioGrid,
    AboutProject,
    AboutService,
    Features,
    FeaturesTwo,
    Faq,
    ReusableBlock,
    AboutTeam,
  ],
  collections: [
    Pages,
    Posts,
    Projects,
    Services,
    CaseStudies,
    Inquiries,
    Team,
    Media,
    Categories,
    Users,
    ReusableContent,
  ],
  globals: [
    Header,
    Footer,
    SiteSettings,
    LocalSEO,
    Blog,
    ServicesPage,
    ProjectsPage,
    TeamPage,
    General,
  ],
  plugins: [
    ...plugins,
  ],
  cors: [getServerSideURL()].filter(Boolean),
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    },
    push: process.env.NODE_ENV === 'development',
    migrationDir: path.resolve(dirname, 'migrations'),
  }),
})
