import Tabs from "../components/tabContent/index";
import Shimmertab from "../components/tabContent/shimmertab";
import ProgressBar from "../components/tabContent/progressBar";
import Faq from "../components/accordian/faq";
import RateUs from "../components/starRating";
import Quiz from "../components/tabContent/quiz";
import TrafficLight from "../components/tabContent/trafficLight";

const tabData = [
  { label: "Shimmer Effect", content: <Shimmertab /> },
  { label: "Progress bar", content: <ProgressBar /> },
  { label: "Accordian", content: <Faq /> },
  { label: "Star Rating", content: <RateUs /> },
  { label: "My Quiz", content: <Quiz /> },
  { label: "Traffic Light", content: <TrafficLight /> },
  { label: "Nested Circle", content: <div>TAB 2 CONTENT</div> },
  { label: "Virtualised List", content: <div>TAB 2 CONTENT</div> },
  { label: "Loader", content: <div>TAB 2 CONTENT</div> },
  { label: "Modal", content: <div>TAB 3 CONTENT</div> },
  { label: "Stepper", content: <div>TAB 3 CONTENT</div> },
  { label: "Drag and drop notes", content: <div>TAB 3 CONTENT</div> },
  { label: "Pagination", content: <div>TAB 3 CONTENT</div> },
  { label: "Toaster", content: <div>TAB 2 CONTENT</div> },
];

const MyWork = () => {
  return (
    <section className="flex container">
      <div className="projects">
        <Tabs tabData={tabData} />
      </div>
    </section>
  );
};

export default MyWork;
