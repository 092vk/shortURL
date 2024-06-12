import './App.css';
import {useState} from 'react';
import QrCode from 'qrcode';

function App() {

  const [input , setInput] = useState('a');
  const [qrURL , setqrURL] = useState('a');

  //function to generate the qr code 
  const generateQrCode = async ()=>{
    try{
      const dataUrl = await QrCode.toDataURL(input);
      setqrURL(dataUrl);
    }
    catch(e){
      console.log(e);
    }
  }


  return (
    <div className="App">
      <h1 className="txt-4xl underline">Tiny URL Generator </h1>
      <input type="text" className="border border-black w-full lg:w-1/4 md-w-1/3 sm:w-1/2 h-12 sm:h-14 md:h-16 lg:h-20 p-3" onChange={(e)=>{
        setInput(e.target.value)
      }} placeholder='Enter your URL'></input>
      <br></br>
      <button className='m-5 w-full lg:w-1/8 md:w-1/6 sm:w-1/4 h-8 sm:h-10 md:h-12 lg:h-14 rounded-lg border border-black bg-gradient-to-r from-blue-700 to-green-500 text-white hover:bg-gradient-to-l from-blue-700 to-green-500 ' onClick={generateQrCode}>Generate ShortURL </button>

      {
        qrURL.length ? (
          //if length is greater than 0 
          <div className='border border-black w-1/4 h-30  mx-auto'>
            <img className='w-full h-full' src={qrURL} alt='Qr Code'/>
          </div>
        ):null
        }

    </div>
  );
}

export default App;
