
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


 <Tabs defaultValue="about" className="w-full">
      <div className="flex justify-center items-center mt-8">
        <TabsList className="inline-flex bg-blue-100 dark:bg-blue-900 transform scale-[1.8]">
          <TabsTrigger value="about">
            <span className="text-slate-900 dark:text-slate-100">About Me</span>
          </TabsTrigger>
          <TabsTrigger value="projects">
            <span className="text-slate-900 dark:text-slate-100">Projects</span>
          </TabsTrigger>
          <TabsTrigger value="contact">
            <span className="text-slate-900 dark:text-slate-100">Contact</span>
          </TabsTrigger>
        </TabsList>
      </div>
      
      <div className="space-y-2">
        <TabsContent value="about"><About /></TabsContent>
      </div>
      <div id="projects">
        <TabsContent value="projects"><Projects /></TabsContent>
      </div>
      <div id="contact">
        <TabsContent value="contact"><Contact /></TabsContent>
      </div>
    </Tabs>


</body>



  
    </>
  )
}

export default App
