import React, { useState } from 'react'
import WorkListItem from './WorkListItem'
import WorkPage from './WorkPage'
import './WorkList.css'
import projectSideImage from '../assets/ProjectSideImage.png'

import Nike from '../assets/Nike/chblFinal.mp4'

const projectData = [
  {
    title: 'NIKE',
    subtitle: 'NIKE',
    videoUrl: Nike,
    imageUrl: projectSideImage,
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
    subtitle: 'COACH',
    videoUrl: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  },
  {
    title: 'B&O A5 Campaign',
    subtitle: 'BANG & OLUFSEN',
    videoUrl: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  },
  {
    title: 'MJxBe@rbrick',
    subtitle: 'MARC JACOBS',
    videoUrl: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  },
  {
    title: 'VCOACH x 大白兔 x 抖音崽崽 兔年挑战赛',
    subtitle: 'COACH&抖音',
    videoUrl: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  },
  {
    title: 'Debeers 达人营销',
    subtitle: 'DEBEERS',
    videoUrl: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
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
