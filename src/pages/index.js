import React from "react"
import HeaderC from '../components/header'
import ReposC from '../components/repos'
import TutorialsC from '../components/tutorials'
import FooterC from '../components/footer'
import ProjectsC from '../components/projects'
import { HomeProvider } from '../context/homeContext'
import Modal from '../components/modalComponent'
import '@fortawesome/fontawesome-free/js/all'


export default function Home() {
  return <HomeProvider>
    <Modal />
    <HeaderC />
    <ProjectsC />
    <TutorialsC />
    <ReposC />
    <FooterC />
  </HomeProvider>
}
