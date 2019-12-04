import * as React from "react";
import { render } from "react-dom";
import {useState, useContext} from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
const TabContext = React.createContext({
  activeKey: '',
  setActiveKey: (key:string) =>{}
});
function Tabs(props: {
  defaultValue: string;
  onChange:(key:string) => void,
  children: React.ReactNode
}){
  const [activeKey,setActiveKey] = useState(props.defaultValue);
  return (<TabContext.Provider value={{
    activeKey,
    setActiveKey
  }}>
    {props.children}
  </TabContext.Provider>)
}
function Tab(props: {
  tab: string,
  children?: React.ReactNode
}){
  const { tab } = props;
  const { activeKey, setActiveKey } = useContext(TabContext);
  const isActive = tab === activeKey;
  console.log('child:', props.children)
  return (
    <Button mr={2} variant={isActive ? 'primary' : 'secondary'} onClick={() => {
      setActiveKey(tab)
    }}>a</Button>
  )
}
function App() {
  return (
    <>
    app
    <Tabs defaultValue={'a'} onChange={(key) => {
      console.log('key',key)
    }}>
      <Tab tab="a">a</Tab>
      <Tab tab="b">b</Tab>
      <Tab tab="c">c</Tab>
    </Tabs>
    </>
  );
}
const rootElement = document.getElementById("root");
render(<App />, rootElement);
