import Footer from '@/components/footer'
import Header from '@/components/header'
import { Container } from 'lucide-react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Header/>

        <Container className='flex-grow'>
          <main className='flex-grow'>
          <Outlet/>
          </main>

        </Container>
        

        <Footer/>
    </div>
  )
}

export default MainLayout;