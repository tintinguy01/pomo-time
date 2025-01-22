import Timer from "@/app/components/timer";
import Navbar from "./components/navbar";
import ToDoList from "./components/todo-list";
import "../styles/globals.css";

const MainPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1 items-center justify-center -translate-y-8 px-4">
        <Timer />
      </div>

      <div className="flex items-center justify-center py-6">
        <ToDoList />
      </div>
    </div>
  );
};

export default MainPage;
