import './App.css'
import {useState} from "react";
import Form from "./forms/components/Form.jsx";

const App = () =>  {
    const [data, setData] = useState ({
        name: '',
        topic: '',
        message: ''
    });

    const handleChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        setData({...data, [e.target.name] : e.target.value });

    }

  return (
    <>
        <h2> Password generator </h2>
        <form>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                />
            </div>
            <div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        placeholder="Topic"
                        name="topic"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Message"
                        name="message"
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>
            <div>
                <div>Name: {data.name}</div>
                <div>Topic:{data.topic}</div>
                <div>Message: {data.message}</div>
            </div>
        </form>
        <Form />
    </>
  )
}

export default App
