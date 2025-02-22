import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles.css";

const OnboardingStep2 = () => {
    const navigate = useNavigate();
    return (
    <motion.div 
    className="container"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    >
        <h1>Voice Magic</h1>
        <p>Say "Next" to continue, or tap the button.</p>
        <button onClick={() => navigate("/step3")}>Next</button>
    </motion.div>
    );
};

export default OnboardingStep2;
