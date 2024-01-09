import { useState } from 'react';
import './App.css';
import { JsxShowCase } from './components/jsx/JsxShowCase';
import { Counter } from './components/managing-state/batching/Counter';
import { LanguageProvider } from './components/managing-state/context/LanguageProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Users as ClassBasedUsers } from './components/class-based/Users';
import { Users as FunctionalUsers } from './components/functional/Users';
import { Users as ManagingStateUsers } from './components/managing-state/Users';
import { Rendering } from './components/rendering/Rendering';
import { UseEffectExample } from './components/hooks/useEffect/UseEffectExample';
import { UseLayoutEffectThrottledExample } from './components/hooks/useLayoutEffect/UseLayoutEffectThrottledExample';
import { UseEffectThrottledExample } from './components/hooks/useLayoutEffect/UseEffectThrottledExample';
import { LayoutEffectDifferences } from './components/hooks/EffectDifferences';
import { UseRefExample } from './components/hooks/useRef/UseRefExample';
import { CustomHookExample } from './components/hooks/CustomHookExample';
import { UserList } from './components/optimization/UserList';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Layout}>
            <Route path='class-based/users' Component={ClassBasedUsers} />
            <Route path='functional/users' Component={FunctionalUsers} />
            <Route path='jsxshowcase' Component={JsxShowCase} />
            <Route
              path='managing-state/users'
              element={
                <LanguageProvider>
                  <ManagingStateUsers />
                </LanguageProvider>
              }
            />
            <Route path='rendering' Component={Rendering} />
            <Route path='effects/use-effect' Component={UseEffectExample} />
            <Route path='effects/effect-throttled' Component={UseEffectThrottledExample} />
            <Route
              path='effects/layout-effect-throttled'
              Component={UseLayoutEffectThrottledExample}
            />
            <Route path='effects/throttled-combined' Component={LayoutEffectDifferences} />
            <Route path='use-ref' Component={UseRefExample} />
            <Route path='custom-hook' Component={CustomHookExample} />
            <Route path='optimization' Component={UserList} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <JsxShowCase /> */}
    </div>
  );
}

export default App;
