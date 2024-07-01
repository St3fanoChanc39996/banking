import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { emitWarning } from 'process';
import React from 'react'


const Home = () => {

  const loggedIn = {firstName:'Stefano', lastName:'Chance', email:'steffiechance@gmail.com'};

  return (
    <section className="home" >
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and manage your accounts transaction efficiently."
            user= {loggedIn.firstName}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1111.11}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transaction={[]}
        banks={[{currentBalance: 123.50},{currentBalance: 500.50}]}
      />
    </section>
  )
}

export default Home