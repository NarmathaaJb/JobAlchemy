import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OnboardingStep1 from "./pages/OnboardingStep1";
import OnboardingStep2 from "./pages/OnboardingStep2";
import OnboardingStep3 from "./pages/OnboardingStep3";

const AppRouter = () => {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<OnboardingStep1 />} />
            <Route path="/step2" element={<OnboardingStep2 />} />
            <Route path="/step3" element={<OnboardingStep3 />} />
        </Routes>
    </Router>
    );
};

export default AppRouter;
