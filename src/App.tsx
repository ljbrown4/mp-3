import {WebsiteWrapper, Container, StyledMain} from "./components/ReuseCode/Reuse.tsx";
import ReuseHeader from './components/ReuseCode/ReuseHeader';
import ReuseFooter from './components/ReuseCode/ReuseFooter';
import ReuseNav from './components/ReuseCode/ReuseNav';
import {useEffect} from 'react';
import {RouterProvider, Route, Routes, createBrowserRouter, useParams} from 'react-router-dom';
//components for each web page
import Education from "./components/websitePages/Education.tsx";
import Home from './components/websitePages/Home';
import Projects from './components/websitePages/Projects';
import Organizations from './components/websitePages/Organizations';
import Leadership from "./components/websitePages/Leadership.tsx";
import Experience from "./components/websitePages/Experience";


//page navigation and reused parts
function Root () {
    const currentPage=useParams();
    let pageTitle=Object.values(currentPage).pop() || "";
    pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
    useEffect(()=>{
        if(pageTitle===""){
            document.title="Home | Resume";
        }else {
            document.title=pageTitle+" | Resume";
        }
    },[pageTitle])

    return (
        <>
            <WebsiteWrapper>
                <ReuseHeader/>

                <Container>
                    <ReuseNav/>
                    <Routes>
                        <Route path = '/' element = {<StyledMain><Home/></StyledMain>}/>
                        <Route path = '/education' element = {<StyledMain><Education/></StyledMain>}/>
                        <Route path = '/projects' element = {<StyledMain><Projects/></StyledMain>}/>
                        <Route path = '/organizations' element = {<StyledMain><Organizations/></StyledMain>}/>
                        <Route path = '/leadership' element = {<StyledMain><Leadership/></StyledMain>}/>
                        <Route path = '/experience' element = {<StyledMain><Experience/></StyledMain>}/>
                    </Routes>
                </Container>
                <ReuseFooter/>
            </WebsiteWrapper>
        </>
    )
}

const Router = createBrowserRouter(
    [{path: '*', Component: Root },]
);




//render everything in App
export default function App() {

  return (
      <RouterProvider router={Router}/>
  )
}


