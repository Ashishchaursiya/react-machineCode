import Accordian from "./components/accordian"
import Corosoul from "./components/corosoul"
import DragDrop from "./components/dragDrop"
import FileExplorer from "./components/fileExplorer"
import InfiniteScroll from "./components/infiniteScroll"
import MindGame from "./components/mindGame"
import Modal from "./components/modal"
import Otp from "./components/otp"
import Pagination from "./components/pagination"
import ProgressBar from "./components/progressBar"
import StarRating from "./components/starRating"
import Stepper from "./components/stepper"
import StopWatch from "./components/stopwatch"
import Tabs from "./components/tabs"
import TicTac from "./components/tictacto"
import Todo from "./components/todo"
import TraficLights from "./components/traficLights"
import { fileData, steps } from "./utils/data"
 

function App() {
 
  return (
    <div className="container">
       {/* <StarRating totalStars={10} /> */}
       {/* <Otp /> */}
       {/* <ProgressBar /> */}
       {/* <Accordian /> */}
       {/* <Tabs /> */}
       {/* <TraficLights  /> */}
       {/* <Todo /> */}
       {/* <FileExplorer  file={fileData}/> */}
       {/* <DragDrop /> */}
       {/* <Modal /> */}
       {/* <Corosoul /> */}
       {/* <InfiniteScroll /> */}
       {/* <Stepper steps={steps} /> */}
       {/* <MindGame /> */}
       {/* <Pagination /> */}
       {/* <TicTac size={2} /> */}
       <StopWatch />
    </div>
  )
}

export default App
