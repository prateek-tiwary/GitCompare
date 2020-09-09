import React from 'react';

import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import Input_Box from './Input_Box';
import Button1 from './Button1';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Typography, Space } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
    
    <Layout>
           <Header>
             <div style={{display: "flex" , justiftContent:"centre", height: "30px"}}>
                        <Typography variant = "h1" style={{ fontSize:"30px" ,color:"white",fontWeight:'bold', marginLeft: "auto",marginRight: "auto",justiftContent:"left"}}>
                        Github Compare
                        </Typography>
             
             </div>
           </Header>
           <Content style={{background: '#a0c4c1' , height: "480px", alignItems:'center'}}>
             <div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', marginTop: '15%' }}>
               <Input_Box/>
               </div>
               <div style={{marginTop: '5px'}}>
               <Button1/>
               

               </div>
               
           </Content>
           <Footer >Designed by Prateek Tiwary</Footer>
     </Layout>
     
   </div> 
  );
}

export default App;
