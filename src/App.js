import './App.css';
import MainPage from './pages/mainPage/MainPage';
import CountPage from './pages/countPage/CountPage';


function App() {

    // const sum = (a,b) => {
    //     return a+b
    // }

    // console.log(sum(4,9));

    return (
        <div className="App">
            <MainPage/>
            {/*<CountPage/>*/}
        </div>
    );
}


export default App;
