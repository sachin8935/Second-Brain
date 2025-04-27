import { DeleteIcon } from "../icons/deleteIcon";
import { ShareIcon } from "../icons/shareIcon";
export const Cards = () => {
  return (
    <div className="w-64 min-h-80 m-4 bg-yellow-50 rounded-xl p-4">
      <div className="flex justify-between items-center">
        <div>Project Ideas</div>
        <div className="flex items-center gap-3 cursor-pointer">
          <ShareIcon />
          <DeleteIcon />
        </div>
      </div>
      <div className="mt-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
      <div className="w-full max-w-[600px] aspect-video">
  <iframe
    className="w-full h-full rounded-lg"
    src="https://www.youtube.com/embed/ngmTD5qM1c0"
    title="SAMAY RAINA in DUBAI ft. @sahil_black"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>


    </div>
  );
};
