import { FC } from "react";
import { Cross } from "../icons/cross";
import { Button } from "./Buttons";
interface ModalProps {
    open: boolean;
    onClose: () => void;
  }
  export const Modal: FC<ModalProps> = ({ open, onClose }) => {
    if(!open)return null;
    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
            <div className="relative min-h-80 min-w-80 bg-white text-black p-6 rounded-xl shadow-xl w-full max-w-md">
                <div className="absolute top-4 right-4 cursor-pointer" onClick={onClose}>
                    <Cross />
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 text-lg font-medium">Title</label>
                        <input
                            type="text"
                            placeholder="Input Your Title here"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div> 
                    <div>
                        <label className="block mb-1 text-lg font-medium">Title</label>
                        <input
                            type="text"
                            placeholder="Enter the description of your choice"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-lg font-medium">Link</label>
                        <input
                            type="url"
                            placeholder="Enter your Link here"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className=" flex items-center justify-center">
                    <Button variant="primary" size="sm" text="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};
