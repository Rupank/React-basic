import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import timer from './timer';
// import HookCounter from './hooks/HookCounter';
// import HookCounter2 from './hooks/HookCounter2';
// import HookCounter3 from './hooks/HookCounter3';
// import HookCounter4 from './hooks/useState/HookCounter4';
// import HookCounter5 from './hooks/useEffect/HookCounter5';
// import HookCounter6 from './hooks/useEffect/HookCounter6';
// import HookCounter7 from './hooks/useEffect/HookCounter7';
// import HookCounter8 from './hooks/useEffect/HookCounter8';
// import IntervalHookCounter from './hooks/useEffect/IntervalHookCounter';
// import DataFetching from './hooks/fetchData/DataFetching';
// import DataFetching1 from './hooks/fetchData/DataFetching1';
// import Greet from './react-basics/component/greet';
// import GreetClass from './react-basics/component/greet-class';
// import Counter from './react-basics/component/Counter';
// import Parent from './react-basics/component/Parent';
// import LifeCycleA from './react-basics/component/LifeCycleA';
// import FragmentDemo from './react-basics/component/FragmentDemo';
// import Table from './react-basics/component/Table';
// import PureComp from './react-basics/component/PureComp';
import * as serviceWorker from './serviceWorker';
import ParentComp from './react-basics/component/ParentComp';
import RefsDemo from './react-basics/component/RefsDemo';
import FocusInput from './react-basics/component/FocusInput';
import FrParentInput from './react-basics/component/FrParentInput';
import PortalDemo from './react-basics/component/PortalDemo';
import Hero from './react-basics/component/Hero';
import ErrorBoundary from './react-basics/component/ErrorBoundary';
import ClickCounter from './react-basics/component/ClickCounter';
import HoverCounter from './react-basics/component/HoverCounter';
import ClickCounterTwo from './react-basics/component/ClickCounterTwo';
import HoverCounterTwo from './react-basics/component/HoverCounterTwo';
import User from './react-basics/component/User';
import CounterProps from './react-basics/component/CounterProps';
import ComponentA from './react-basics/component/ComponentA';
import { UserProvider } from './react-basics/component/userContext';
import PostList from './react-basics/component/PostList';
import PostForm from './react-basics/component/PostForm';
ReactDOM.render(
    <div>
        {/* <UserProvider value="Rupank">

            <ComponentA />
        </UserProvider> */}

        {/* <PostList /> */}
        <PostForm />
        {/* <CounterProps
            render={(count, incrementCount) =>
                <ClickCounterTwo count={count} incrementCount={incrementCount} />}
        />

        <CounterProps
            render={(count, incrementCount) =>
                <HoverCounterTwo count={count} incrementCount={incrementCount} />}
        /> */}
        {/* <ClickCounter name='Rupank' />
        <HoverCounter /> */}
        {/* <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedIn) => isLoggedIn ? 'Rupank' : 'Guest'} /> */}
        {/* <ErrorBoundary>
            <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
            <Hero heroName="SuperMane" />
        </ErrorBoundary>
        <ErrorBoundary>

            <Hero heroName="Joker" />
        </ErrorBoundary> */}


        {/* <GreetClass name="Rupank">
            <p> Children Component</p>
        </GreetClass>
        <Greet name ="Mohit">
        <p> Children Component Function</p>
        </Greet> */}
        {/* <PortalDemo /> */}
        {/* <ParentComp/> */}
    </div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
