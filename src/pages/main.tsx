import Header from '../components/header/header';
import Info from '../components/info/info';
import Tab from '../components/tab/tab';

function Main(): JSX.Element {
  return (
    <main className="main">
      <Header />
      <Info />
      <Tab content='NoobClub' />
    </main>
  );
}

export default Main;
