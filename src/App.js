import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props){
  console.log('props',props,props.title);
  return<header>
      <h1><a href="/">web</a></h1>
    </header>
}
function Nav(props){
 const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href='</li>/read/+t.id'>{t.title}</a></li>)
  }
 return <nav>
    <ol>
          <li><a href="/read1/">html</a></li>
          <li><a href="/read2/">css</a></li>
          <li><a href="/read3/">js</a></li>
    </ol>
    </nav>
}
function Article(props){
  return     <article>
  <h2>{props.title}</h2> 
  {props.body}
</article>
 }
function App() {
  const [mode ,setMode]= useState('welcome');
  const topics = [
    {id:1, title:'hmtl' , body:'html is ...'},
    {id:2, title:'css' , body:'css is ...'},
    {id:3, title:'javascript' , body:'javascript is ...'}
  ]
  let content = null;
  if(mode==='welcome'){
    content= <Article title="welcome" body="hello web"></Article>
  }else if(mode==='read'){
    content= <Article title="read" body="hello read"></Article>
  }
  return ( 
    <div>
    <Header title="web" onChangeMode={()=>{
     setMode=('welcome');
    }}></Header>
    <Nav topics={topics} onChangeMode={(id)=>{
      setMode=('read');
    }}></Nav>
    {content}
    </div>
    );

}

export default App;
