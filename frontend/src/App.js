import './App.css';
import {useState} from 'react';
import QrCode from 'qrcode';
import preLoadedQRcode from './defaultQRCODE.png'
import {RedirectURL,getHello,generateTinyURL,getAnalytics} from './components/sendDataBackend';


function App() {
  
  const defaultQRcode = preLoadedQRcode;
  const [input , setInput] = useState('a');
  const [qrURL , setqrURL] = useState(preLoadedQRcode);
  const [showURL , setshowURL] = useState(false);
  const [URL, setURL] = useState('your short URL');

  //function to generate the qr code 
  const generateShortURL = async ()=>{
    try{
      const dataUrl = await QrCode.toDataURL(input);
      setqrURL(dataUrl);
      setshowURL(true);
      generateTinyURL(input).then(data=>{
        setURL(`http://localhost:8081/${data.id}`);
      })
      .catch(error =>{
        console.log("some error happend");
        alert("SHORT url is not generated , some error was encountered ");
      })
    }
    catch(e){
      console.log(e);
    }
  }


  //function for copying the url at clipboard 
  const copyToClipboard = ()=>{
    navigator.clipboard.writeText(URL).then(()=>{
      alert('ShortURL copied to the clipboard');
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  //function to download the qr code or share the qr code
  const shareQRCode = () => {
    if (navigator.share) {
      navigator.share({
        title: 'QR Code',
        text: 'Check out this QR code!',
        url: qrURL
      }).then(() => {
        console.log('Shared successfully.');
      }).catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      console.log('Web Share API not supported.');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex  flex-col items-center justify-center">

      <h1 className="text-3xl sm:text-4xl md:text-5xl  underline mb-10 font-serif">Tiny URL Generator </h1>

      <input type="text" className="border-2 border-blue-600 w-full lg:w-1/4 md-w-1/3 sm:w-1/2 h-12 sm:h-14 md:h-16 lg:h-20 p-3 text-black" onChange={(e)=>{
        setInput(e.target.value)
      }} placeholder='Enter your URL'></input>

      <br></br>

      <button className='mb-5 w-full lg:w-1/8 md:w-1/6 sm:w-1/4 h-8 sm:h-10 md:h-12 lg:h-14 rounded-lg border border-black bg-gradient-to-r from-blue-700 to-green-500 text-white hover:bg-gradient-to-l from-blue-700 to-green-500 transform hover:scale-105' onClick={generateShortURL}>Generate ShortURL </button>

      {
        showURL && (
          <>
            <div className='mt-5 mb-7 bg-white border-2 border-blue-600 w-full lg:w-1/4 md-w-1/3 sm:w-1/2 h-7 sm:h-9 md:h-11 lg:h-15 p-3 text-black flex items-center justify-center'><p>{URL}</p></div>

            <button className='bg-blue-400 rounded-lg h-8 mt-1 mb-6 w-full lg:w-1/8 md:w-1/6 sm:w-1/4 focus:outline-none hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 transform hover:scale-105' onClick={copyToClipboard}>Copy ShortURL</button>

          { 
            qrURL.length ? (
              //if length is greater than 0 
              <div className='border border-black w-1/4 h-30  mx-auto'>
                <img className='w-full h-full' src={qrURL} alt='qrCode'/>
              </div>
            ):null
          }

          <button className='bg-blue-400 rounded-lg h-8 mt-8 w-full lg:w-1/8 md:w-1/6 sm:w-1/4 focus:outline-none hover:ring-2 hover:ring-blue-500 hover:ring-opacity-50 transform hover:scale-105 ' onClick={shareQRCode}>Share QR code</button>


          </>
        )
      }

      
    </div>
  );
}

export default App;
