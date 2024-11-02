import "./App.css";
import chatgptLogo from "./Assets/chatgpt.svg";
import addBtn from "./Assets/add-30.png";
import msgIcon from "./Assets/message.svg";
import home from "./Assets/home.svg";
import saved from "./Assets/bookmark.svg";
import rocket from "./Assets/rocket.svg";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={chatgptLogo} alt="Logo" className="logo " />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="newChat-btn">
            <img src={addBtn} alt="Add button" className="add-btn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="query" />
              What is Programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" />
              What is UseState Hook?
            </button>
          </div>

          <div className="prev-conversation">
            <p>Previous Conversations</p>
            <h1>Code Issue Assistance</h1>
            <h1>Code Logic Explanation</h1>
            <h1>React Hooks Quiz Data</h1>
            <h1>React Custom Hooks Explanation</h1>
            <h1>Beginner Gym Program Plan</h1>
          </div>
        </div>
        <div className="lowerSide">
          {/* <div className="list-items">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="list-items">
            <img src={saved} alt="Saved" className="listItemsImg" />
            Saved
          </div> */}
          <div className="list-items">
            <img src={rocket} alt="Upgrade" className="listItemsImg" />
            <div className="list-items-contents">
              <h3>Upgrade Plan</h3>
              <p>More access to the best models</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="header">
          <p>ChatGpt</p>
          <img src="" alt="" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}

export default App;
