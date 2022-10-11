import { useState, useEffect } from 'react';
import './App.css';
import { View } from './components/view';


const getDatafromLS = () => {
    const data = localStorage.getItem('datas');
    if (data) {
      return JSON.parse(data);
    }
    else {
      return []
    }
  }

function App() {

  const [datas, setdatas] = useState(getDatafromLS());

  const [name, setName] = useState('');
  const [rollno, setRollno] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');

  const handleAddDataSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let info = {
      name,
      rollno,
      email,
      rating
    }
    setdatas([...datas, info]);
    setName('');
    setRollno('');
    setEmail('');
    setRating('');
  }

  const deleteData = (rollno) => {
    const filteredDatas = datas.filter((element, index) => {
      return element.rollno !== rollno
    })
    setdatas(filteredDatas);
  }

  useEffect(() => {
    localStorage.setItem('datas', JSON.stringify(datas));
  }, [datas])

  
  return (
    <>
      <div className="container">
          <form className="form" onSubmit={handleAddDataSubmit}>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="input" placeholder="Full Name" required></input>
            <input onChange={(e) => setRollno(e.target.value)} value={rollno} type="Number" className="input" placeholder="Roll No" required></input>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="input" placeholder="Email" required></input>
            <input onChange={(e) => setRating(e.target.value)} value={rating} type="Number" className="input" min={0} max={10} placeholder="Rating" required></input>
            <button type="submit" className="submit">SUBMIT</button>
          </form>
          <div className="container2">
            <div className="logo"></div>
            <div className='view-container'>
              {datas.length > 0 && <>
                <div className='table-responsive'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Roll No</th>
                        <th>Email</th>
                        <th>Rating</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <View datas={datas} deleteData={deleteData} />
                    </tbody>
                  </table>
                </div>
                <button className='btn btn-danger btn-md'
                  onClick={() => setdatas([])}>Remove All</button>
              </>}
              {datas.length < 1 && <div>No Data Submitted yet</div>}
            </div>
        </div>
      </div>

    </>
  );
}

export default App;
