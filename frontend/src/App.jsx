
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
    <div className='darkmode-section'>
    <DarkMode />
      </div>
   

    <Header/>

    <Tabs defaultValue="about" className="w-full">
  <div className="flex justify-center items-center mt-4 sm:mt-6 md:mt-8">
    <TabsList className="inline-flex bg-blue-100 dark:bg-blue-900 transform scale-110 sm:scale-135 md:scale-[1.8] w-full max-w-xs sm:max-w-md md:max-w-lg">
      <TabsTrigger value="about" className="flex-1">
        <span className="text-[var(--background-color)] dark:text-[var(--background-color)] text-sm sm:text-base">
          About Me
        </span>
      </TabsTrigger>
      <TabsTrigger value="projects" className="flex-1">
        <span className="text-[var(--background-color)] dark:text-[var(--background-color)] text-sm sm:text-base">
          Projects
        </span>
      </TabsTrigger>
      <TabsTrigger value="contact" className="flex-1">
        <span className="text-[var(--background-color)] dark:text-[var(--background-color)] text-sm sm:text-base">
          Contact
        </span>
      </TabsTrigger>
    </TabsList>
  </div>

  <div className="space-y-2 px-4 sm:px-6 md:px-8">
    <TabsContent value="about"><About /></TabsContent>
  </div>
  <div id="projects" className="px-4 sm:px-6 md:px-8">
    <TabsContent value="projects"><Projects /></TabsContent>
  </div>
  <div id="contact" className="px-4 sm:px-6 md:px-8">
    <TabsContent value="contact"><Contact /></TabsContent>
  </div>
</Tabs>




</body>



  
    </>
  )
}

export default App
