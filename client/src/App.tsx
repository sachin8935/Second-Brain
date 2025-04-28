import { Button } from "./components/Buttons";
import { PlusIcon } from "./icons/plusIcon";
import { ShareIcon } from "./icons/shareIcon";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { Cards } from "./components/Cards";
import { Sidebar } from "./components/SideBar";

function App() {
  const [modalopen, setModalopen] = useState(false);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-72 h-screen bg-purple-700">
        <div className="flex justify-end my-4 mx-6">
          <Button
            onClick={() => setModalopen(true)}
            variant="primary"
            size="sm"
            text="Add Content"
            startIcon={<PlusIcon />}
          />
          <Button
            variant="secondary"
            size="sm"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>
        <Modal open={modalopen} onClose={() => setModalopen(false)} />
        <Cards />
      </div>
    </div>
  );
}

export default App;
