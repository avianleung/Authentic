import React, { useState } from 'react'
import WorkListItem from './WorkListItem'
import WorkPage from './WorkPage'
import './WorkList.css'

import ourWorks from '../assets/our-works.png'

import nikeLogo from '../assets/Nike/NikeLogo.png'
import coachLogo from '../assets/Coach/CoachLogo.png'
import boLogo from '../assets/B&O/boLogo.png'
import mjLogo from '../assets/MJxBe/mjLogo.png'
import debeersLogo from '../assets/Debeers/dbLogo.png'

import Nike from '../assets/Nike/chblFinal.mp4'

import boVideo from '../assets/B&O/long.mp4'
import mJxBeVideo from '../assets/MJxBe/long.mp4'
import coachVideo from '../assets/Coach/1.mp4'
import debeersVideo from '../assets/Debeers/short.mp4'

import CNY from '../assets/CNY/video1.mp4'
import cnyC0 from '../assets/CNY/carousel/0.png'
import cnyC1 from '../assets/CNY/carousel/1.png'
import cnyC2 from '../assets/CNY/carousel/2.png'
import cnyC3 from '../assets/CNY/carousel/3.png'
import cnyC4 from '../assets/CNY/carousel/4.png'
import cnyC5 from '../assets/CNY/carousel/5.png'
import cnyC6 from '../assets/CNY/carousel/6.png'
import cnyC7 from '../assets/CNY/carousel/7.png'

import boC00 from '../assets/B&O/carousel/bo-0-0.png'
import boC01 from '../assets/B&O/carousel/bo-0-1.png'
import boC02 from '../assets/B&O/carousel/bo-0-2.png'
import boC03 from '../assets/B&O/carousel/bo-0-3.png'
import boC04 from '../assets/B&O/carousel/bo-0-4.png'
import boC10 from '../assets/B&O/carousel/bo-1-0.png'
import boC11 from '../assets/B&O/carousel/bo-1-1.png'
import boC12 from '../assets/B&O/carousel/bo-1-2.png'
import boC13 from '../assets/B&O/carousel/bo-1-3.png'

import dbC00 from '../assets/Debeers/carousel/db-0-0.png'
import dbC01 from '../assets/Debeers/carousel/db-0-1.png'
import dbC02 from '../assets/Debeers/carousel/db-0-2.png'
import dbC03 from '../assets/Debeers/carousel/db-0-3.png'
import dbC10 from '../assets/Debeers/carousel/db-1-0.png'
import dbC11 from '../assets/Debeers/carousel/db-1-1.png'
import dbC12 from '../assets/Debeers/carousel/db-1-2.png'
import dbC13 from '../assets/Debeers/carousel/db-1-3.png'
import dbC20 from '../assets/Debeers/carousel/db-2-0.png'
import dbC21 from '../assets/Debeers/carousel/db-2-1.png'
import dbC22 from '../assets/Debeers/carousel/db-2-2.png'
import dbC23 from '../assets/Debeers/carousel/db-2-3.png'

import coachC1 from '../assets/Coach/1.mp4'
import coachC2 from '../assets/Coach/2.mp4'
import coachC3 from '../assets/Coach/3.MP4'
import coachC4 from '../assets/Coach/4.MP4'

const projectData = [
  {
    title: 'NIKE',
    logo: nikeLogo,
    subtitle: 'NIKE',
    videoUrl: Nike,
    background: [
      {
        header: 'a)产品维度',
        content:
          '新品系列延续了科技创新，同时重点升级了外观，特别采用了符合中国审美的色彩，以吸引年轻一代消费者的青睐。',
      },
      {
        header: 'b)传播维度',
        content:
          'B&O选择在春节这一具有深厚文化意义的时节推出「中国色」限定产品。通过借助国潮风潮，B&O旨在赢得Z世代的关注和喜爱。',
      },
    ],
    insight: [
      {
        content:
          '中国高端女性和社交媒体上的年轻世代渴望真实、贴近生活的品牌内容。她们愿意在社交平台上投入时间和金钱，通过学习提升自我，逐步实现理想中的自己。',
      },
      {
        header: '基于此，戴比尔斯采取以下策略',
      },
      {
        header: '达人探店',
        content:
          '聚焦中腰部达人，选择具高级感且有奢侈品合作经验的博主，通过试戴和内容创作，让品牌更贴近目标消费者的生活，满足情感诉求。',
      },
      {
        header: '本地KOL合作',
        content:
          '邀请本地KOL，满足“即看即试、即看即预约”的需求，增强品牌在本地市场的影响力，吸引消费者到店体验，推动销售转化。',
      },
    ],
  },
  {
    title: 'CNY 龙年祈福',
    logo: coachLogo,
    subtitle: 'COACH',
    videoUrl: CNY,
    background: [
      {
        header: 'a)产品维度',
        content:
          '新品系列延续了科技创新，同时重点升级了外观，特别采用了符合中国审美的色彩，以吸引年轻一代消费者的青睐。',
      },
      {
        header: 'b)传播维度',
        content:
          'B&O选择在春节这一具有深厚文化意义的时节推出「中国色」限定产品。通过借助国潮风潮，B&O旨在赢得Z世代的关注和喜爱。',
      },
    ],
    insight: [
      {
        content:
          '中国高端女性和社交媒体上的年轻世代渴望真实、贴近生活的品牌内容。她们愿意在社交平台上投入时间和金钱，通过学习提升自我，逐步实现理想中的自己。',
      },
      {
        header: '基于此，戴比尔斯采取以下策略',
      },
      {
        header: '达人探店',
        content:
          '聚焦中腰部达人，选择具高级感且有奢侈品合作经验的博主，通过试戴和内容创作，让品牌更贴近目标消费者的生活，满足情感诉求。',
      },
      {
        header: '本地KOL合作',
        content:
          '邀请本地KOL，满足“即看即试、即看即预约”的需求，增强品牌在本地市场的影响力，吸引消费者到店体验，推动销售转化。',
      },
    ],
    carousel: [
      {
        type: 'image',
        mediaUrl: cnyC0,
      },
      {
        type: 'image',
        mediaUrl: cnyC1,
      },
      {
        type: 'image',
        mediaUrl: cnyC2,
      },
      {
        type: 'image',
        mediaUrl: cnyC3,
      },
      {
        type: 'image',
        mediaUrl: cnyC4,
      },
      {
        type: 'image',
        mediaUrl: cnyC5,
      },
      {
        type: 'image',
        mediaUrl: cnyC6,
      },
      {
        type: 'image',
        mediaUrl: cnyC7,
      },
    ],
  },
  {
    title: 'B&O A5 Campaign',
    logo: boLogo,
    subtitle: 'BANG & OLUFSEN',
    videoUrl: boVideo,
    background: [
      {
        header: 'a)产品维度',
        content:
          '新品系列延续了科技创新，同时重点升级了外观，特别采用了符合中国审美的色彩，以吸引年轻一代消费者的青睐。',
      },
      {
        header: 'b)传播维度',
        content:
          'B&O选择在春节这一具有深厚文化意义的时节推出「中国色」限定产品。通过借助国潮风潮，B&O旨在赢得Z世代的关注和喜爱。',
      },
    ],
    insight: [
      {
        content:
          '中国高端女性和社交媒体上的年轻世代渴望真实、贴近生活的品牌内容。她们愿意在社交平台上投入时间和金钱，通过学习提升自我，逐步实现理想中的自己。',
      },
      {
        header: '基于此，戴比尔斯采取以下策略',
      },
      {
        header: '达人探店',
        content:
          '聚焦中腰部达人，选择具高级感且有奢侈品合作经验的博主，通过试戴和内容创作，让品牌更贴近目标消费者的生活，满足情感诉求。',
      },
      {
        header: '本地KOL合作',
        content:
          '邀请本地KOL，满足“即看即试、即看即预约”的需求，增强品牌在本地市场的影响力，吸引消费者到店体验，推动销售转化。',
      },
    ],
    carousel: [
      {
        type: 'image',
        mediaUrl: boC00,
      },
      {
        type: 'image',
        mediaUrl: boC01,
      },
      {
        type: 'image',
        mediaUrl: boC02,
      },
      {
        type: 'image',
        mediaUrl: boC03,
      },
      {
        type: 'image',
        mediaUrl: boC04,
      },
    ],
    carousel2: [
      {
        type: 'image',
        mediaUrl: boC10,
      },
      {
        type: 'image',
        mediaUrl: boC11,
      },
      {
        type: 'image',
        mediaUrl: boC12,
      },
      {
        type: 'image',
        mediaUrl: boC13,
      },
    ],
  },
  {
    title: 'MJxBe@rbrick',
    logo: mjLogo,
    subtitle: 'MARC JACOBS',
    videoUrl: mJxBeVideo,
    background: [
      {
        header: 'a)产品维度',
        content:
          '新品系列延续了科技创新，同时重点升级了外观，特别采用了符合中国审美的色彩，以吸引年轻一代消费者的青睐。',
      },
      {
        header: 'b)传播维度',
        content:
          'B&O选择在春节这一具有深厚文化意义的时节推出「中国色」限定产品。通过借助国潮风潮，B&O旨在赢得Z世代的关注和喜爱。',
      },
    ],
    insight: [
      {
        content:
          '中国高端女性和社交媒体上的年轻世代渴望真实、贴近生活的品牌内容。她们愿意在社交平台上投入时间和金钱，通过学习提升自我，逐步实现理想中的自己。',
      },
      {
        header: '基于此，戴比尔斯采取以下策略',
      },
      {
        header: '达人探店',
        content:
          '聚焦中腰部达人，选择具高级感且有奢侈品合作经验的博主，通过试戴和内容创作，让品牌更贴近目标消费者的生活，满足情感诉求。',
      },
      {
        header: '本地KOL合作',
        content:
          '邀请本地KOL，满足“即看即试、即看即预约”的需求，增强品牌在本地市场的影响力，吸引消费者到店体验，推动销售转化。',
      },
    ],
  },
  {
    title: 'COACH x 大白兔 x 抖音崽崽 兔年挑战赛',
    logo: coachLogo,
    subtitle: 'COACH&抖音',
    videoUrl: coachVideo,
    background: [
      {
        header: 'a)产品维度',
        content:
          '新品系列延续了科技创新，同时重点升级了外观，特别采用了符合中国审美的色彩，以吸引年轻一代消费者的青睐。',
      },
      {
        header: 'b)传播维度',
        content:
          'B&O选择在春节这一具有深厚文化意义的时节推出「中国色」限定产品。通过借助国潮风潮，B&O旨在赢得Z世代的关注和喜爱。',
      },
    ],
    insight: [
      {
        content:
          '中国高端女性和社交媒体上的年轻世代渴望真实、贴近生活的品牌内容。她们愿意在社交平台上投入时间和金钱，通过学习提升自我，逐步实现理想中的自己。',
      },
      {
        header: '基于此，戴比尔斯采取以下策略',
      },
      {
        header: '达人探店',
        content:
          '聚焦中腰部达人，选择具高级感且有奢侈品合作经验的博主，通过试戴和内容创作，让品牌更贴近目标消费者的生活，满足情感诉求。',
      },
      {
        header: '本地KOL合作',
        content:
          '邀请本地KOL，满足“即看即试、即看即预约”的需求，增强品牌在本地市场的影响力，吸引消费者到店体验，推动销售转化。',
      },
    ],
    carousel: [
      {
        type: 'video',
        mediaUrl: coachC1,
      },
      {
        type: 'video',
        mediaUrl: coachC2,
      },
      {
        type: 'video',
        mediaUrl: coachC3,
      },
      {
        type: 'video',
        mediaUrl: coachC4,
      },
    ],
  },
  {
    title: 'Debeers 达人营销',
    logo: debeersLogo,
    subtitle: 'DEBEERS',
    videoUrl: debeersVideo,
    background: [
      {
        header: 'a)产品维度',
        content:
          '新品系列延续了科技创新，同时重点升级了外观，特别采用了符合中国审美的色彩，以吸引年轻一代消费者的青睐。',
      },
      {
        header: 'b)传播维度',
        content:
          'B&O选择在春节这一具有深厚文化意义的时节推出「中国色」限定产品。通过借助国潮风潮，B&O旨在赢得Z世代的关注和喜爱。',
      },
    ],
    insight: [
      {
        content:
          '中国高端女性和社交媒体上的年轻世代渴望真实、贴近生活的品牌内容。她们愿意在社交平台上投入时间和金钱，通过学习提升自我，逐步实现理想中的自己。',
      },
      {
        header: '基于此，戴比尔斯采取以下策略',
      },
      {
        header: '达人探店',
        content:
          '聚焦中腰部达人，选择具高级感且有奢侈品合作经验的博主，通过试戴和内容创作，让品牌更贴近目标消费者的生活，满足情感诉求。',
      },
      {
        header: '本地KOL合作',
        content:
          '邀请本地KOL，满足“即看即试、即看即预约”的需求，增强品牌在本地市场的影响力，吸引消费者到店体验，推动销售转化。',
      },
    ],
    carousel: [
      {
        type: 'image',
        mediaUrl: dbC00,
      },
      {
        type: 'image',
        mediaUrl: dbC01,
      },
      {
        type: 'image',
        mediaUrl: dbC02,
      },
      {
        type: 'image',
        mediaUrl: dbC03,
      },
    ],
    carousel2: [
      {
        type: 'image',
        mediaUrl: dbC10,
      },
      {
        type: 'image',
        mediaUrl: dbC11,
      },
      {
        type: 'image',
        mediaUrl: dbC12,
      },
      {
        type: 'image',
        mediaUrl: dbC13,
      },
    ],
    carousel3: [
      {
        type: 'image',
        mediaUrl: dbC20,
      },
      {
        type: 'image',
        mediaUrl: dbC21,
      },
      {
        type: 'image',
        mediaUrl: dbC22,
      },
      {
        type: 'image',
        mediaUrl: dbC23,
      },
    ],
  },
]

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = (project) => {
    console.log('handleProjectClick', project)
    setSelectedProject(project)
  }

  const handleBackClick = () => {
    setSelectedProject(null)
  }

  console.log('selectedProject', selectedProject)

  return (
    <>
      {selectedProject ? (
        <WorkPage project={selectedProject} handleBackClick={handleBackClick} />
      ) : (
        <div className='project-list-container'>
          <div className='project-list'>
            <div style={{ width: '65vw', backgroundColor: '#f9f9f9', marginBottom: '5vh' }}>
              <img src={ourWorks} alt='our-works' style={{ width: '100%' }} />
            </div>
            {projectData.map((project, index) => (
              <WorkListItem key={index} project={project} handleProjectClick={handleProjectClick} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectList
