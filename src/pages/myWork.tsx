import Tabs from "../components/tabContent/index";
import Shimmertab from "../components/tabContent/shimmertab";
import ProgressBar from  "../components/tabContent/progressBar"
const tabData = [
  {label:"Shimmer Effect", content:<Shimmertab/>},
  {label:"Progress bar", content:<ProgressBar />},
  {label:"Loader", content:<div>TAB 2 CONTENT</div>},
  {label:"Modal", content:<div>TAB 3 CONTENT</div>},
  {label:"Stepper", content:<div>TAB 3 CONTENT</div>},
  {label:"Drag and drop notes", content:<div>TAB 3 CONTENT</div>},
  {label:"Pagination", content:<div>TAB 3 CONTENT</div>},
  {label:"Toaster", content:<div>TAB 2 CONTENT</div>},
]


const MyWork = () => {

  return (
    <section className="flex container">
      <div className="projects">
        <Tabs tabData={tabData}/>
      </div>
    </section>
  );
};

export default MyWork;
