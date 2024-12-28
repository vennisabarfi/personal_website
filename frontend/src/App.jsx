
import './App.css'
import Header from './Header/Header'
import Contact from './Contact/Contact'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Projects from './Projects/Projects'
import About from './About/About'
import DarkMode from './DarkMode'

function App() {

 
  

  return ( 
    <>



    <body className='main-body'>
    <DarkMode />
    <Header/>


<Tabs defaultValue="about">
  <TabsList className="tabs">
    {/* <TabsTrigger className="px-4 py-2 text-blue-600"value="about">About Me</TabsTrigger> */}
    <TabsTrigger value="about">About Me</TabsTrigger>
    <TabsTrigger value="projects">Projects</TabsTrigger>
    <TabsTrigger value="contact">Contact</TabsTrigger>
  </TabsList>
   <div className='space-y-2'>
   <TabsContent value="about"><About/></TabsContent>
   </div>

      <div id="projects">
      <TabsContent value="projects"><Projects/></TabsContent>
      </div>

      <div id="contact">
      <TabsContent value="contact"><Contact/></TabsContent>
      </div>
  
</Tabs>

<div id="projects-only">
Help me

</div>
    
</body>



  
    </>
  )
}

export default App
