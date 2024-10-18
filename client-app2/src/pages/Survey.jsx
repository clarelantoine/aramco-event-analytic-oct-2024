import Header from "../components/Header";
import SurveyForm from "../components/SurveyForm";
import VideoBackground from "../components/VideoBackground";
import Footer from "../components/Footer";

export default function Survey() {
  return (
    <>
      <VideoBackground />
      <Header text="exhibit survey" />
      <div className="survey">
        <h2 className="title">
          Kindly rate the following on a scale of 1-5, with 1 being very
          unsatisfied, 3 being neutral, and 5 being very satisfied.
        </h2>
        <SurveyForm />
      </div>

      {/* <Footer text="Aramco" /> */}
    </>
  );
}
