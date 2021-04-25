import React from 'react'
import { Route } from 'react-router-dom'
import { Dashboard } from './components/dashboard/Dashboard'
import { Faculties } from './components/faculties/faculties'
import { Groups } from './components/groups/groups'
import { Navigation } from './components/navigation/Navigation'
import { Students } from './components/students/students'

// import { Transition, CSSTransition } from 'react-transition-group'

export default function App() {

  return (
    <div className="container">
      <Navigation />
      <div className="container2">
        {/* <Dashboard/>
      <Faculties/>
      <Groups/>
      <Students/> */}
        <Route path="/faculties" component={Faculties} />
        <Route path="/groups" component={Groups} />
        <Route path="/students" component={Students} />
        <Route path="/" exact component={Dashboard} />

      </div>



    </div>


  )


}

