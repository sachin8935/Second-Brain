import { Documents } from "../icons/documents";
import { Link } from "../icons/link";
import { Tags } from "../icons/tags";
import { Twitter } from "../icons/twiiter";
import { YouTube } from "../icons/youtube";

export const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-white border-r pl-7">
      <div>
        <div className="pt-6 font-bold text-3xl">
          <div>Second Brain</div>
        </div>
        <div className="flex flex-col gap-10 pl-10 pt-10">
          <div className="flex items-center gap-2 cursor-pointer">
            <Twitter />
            <div>Tweets</div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <YouTube/>
            <div>Videos</div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Documents/>
          <div>Documents</div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Link/>
          <div>Links</div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Tags/>
          <div>Tags</div>
          </div>
        </div>
      </div>
    </div>
  );
};
