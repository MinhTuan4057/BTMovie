import logo from './logo.svg'
import './App.css'

import BTMovieBooking from './BTMovieBooking/BTMovieBooking'


//component lớn nhất trong dự án

// 2 loại component
// + class component (stateful) <2019 (lifecyle)
// + function component (stateless) 100%
// 1 component chỉ đc phép return về 1 thẻ jsx duy nhất
// attribute: viết theo quy tác camelCase

//JSX: Javascript XML => giúp các bạn viết html trong javascript

function App() {
  return (
    // <div></div>
    <div className="App pb-5" style={{ backgroundColor: '#1c1c25', color: 'white' }}>
    
    {
      
    }

      <BTMovieBooking></BTMovieBooking>
</div>
  );
}

export default App;
