import React, { useState } from 'react'
import ListItem from './ListItem'
import ProjectModal from './ProjectModal'
import './ProjectList.css'

import nikeSideImage from '../assets/nikeSideImage.png'
import cnySideImage from '../assets/cnySideImage.png'
import boSideImage from '../assets/boSideImage.png'
import mjSideImage from '../assets/mjSideImage.png'
import coachSideImage from '../assets/coachSideImage.png'
import debeersSideImage from '../assets/debeersSideImage.png'

import nikeVideo from '../assets/Nike/short.mp4'
import cnyVideo from '../assets/CNY/video1.mp4'
import boVideo from '../assets/B&O/short.mp4'
import mJxBeVideo from '../assets/MJxBe/short.mp4'
import coachVideo from '../assets/Coach/short.mp4'
import debeersImage from '../assets/Debeers/debeersImage.png'

const projectData = [
  {
    title: 'NIKE CHBL2023-24 耐高主场3D互动体验',
    subtitle: 'NIKE',
    videoUrl: nikeVideo,
    videoDimensions: {
      width: 540,
      height: 960,
    },
    imageUrl: nikeSideImage,
    projectBackground: [
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
  },
  {
    title: 'CNY 龙年祈福',
    subtitle: 'COACH',
    videoUrl: cnyVideo,
    imageUrl: cnySideImage,
    projectBackground: [
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
  },
  {
    title: 'B&O A5 Campaign',
    subtitle: 'BANG & OLUFSEN',
    videoUrl: boVideo,
    imageUrl: boSideImage,
    projectBackground: [
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
  },
  {
    title: 'MJxBe@rbrick',
    subtitle: 'MARC JACOBS',
    videoUrl: mJxBeVideo,
    imageUrl: mjSideImage,
    projectBackground: [
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
  },
  {
    title: 'COACH x 大白兔 x 抖音崽崽 兔年挑战赛',
    subtitle: 'COACH&抖音',
    videoUrl: coachVideo,
    videoVertical: true,
    imageUrl: coachSideImage,
    projectBackground: [
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
  },
  {
    title: 'Debeers 达人营销',
    subtitle: 'DEBEERS',
    videoUrl: 'none',
    imagePreview: debeersImage,
    imageUrl: debeersSideImage,
    projectBackground: [
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
  },
]

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleItemClick = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className='project-list-container'>
      <div className='project-list'>
        <div className='list'>
          {projectData.map((project, index) => (
            <ListItem {...project} key={index} handleItemClick={handleItemClick} />
          ))}
        </div>
        <div>
          <button className='view-all-button' onClick={() => (window.location.href = '/the-work')}>
            View all projects
          </button>
        </div>
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
      {/* <Footer /> */}
    </div>
  )
}

export default ProjectList
