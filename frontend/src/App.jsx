
import './App.css'
import Header from './Header/Header'
import Contact from './Contact/Contact'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Projects from './Projects/Projects'
import About from './About/About'
import DarkMode from './DarkMode'
import React, { useEffect } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';


function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('about');

  // Update active tab based on URL params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get('tab');
    if (tab && ['about', 'projects', 'contact'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [location]);

  const handleTabChange = (value) => {
    setActiveTab(value);
    navigate(`?tab=${value}`);
  };
  

  return ( 
    <>



    <body className='main-body'>
    <DarkMode />
    <Header/>


    <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="tabs">
          <TabsTrigger value="about">About Me</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <div className="space-y-2">
          <TabsContent value="about">
            <About />
          </TabsContent>
        </div>

        <div id="projects">
          <TabsContent value="projects">
            <Projects />
          </TabsContent>
        </div>

        <div id="contact">
          <TabsContent value="contact">
            <Contact />
          </TabsContent>
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
