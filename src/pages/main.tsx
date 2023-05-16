import Events from '../components/events/events';
import Header from '../components/header/header';
import Info from '../components/info/info';
import Search from '../components/search/search';
import Tab from '../components/tab/tab';

function Main(): JSX.Element {
  return (
    <main className="main">
      <Header />
      <Info />
      <Tab content='NoobClub' />
      <Tab content='Spotify' />
      <Search />
      <Tab content='NapalmRecords' />
      <Tab content='NuclearBlast' />
      <Events />
    </main>
  );
}

export default Main;
