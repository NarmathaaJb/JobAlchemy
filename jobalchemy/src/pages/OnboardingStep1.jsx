import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles.css";

const OnboardingStep1 = () => {
    const navigate = useNavigate();
    return (
    <motion.div
    className="container"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    >
        <h1>Welcome to Alchemy</h1>
        <p>Unlock the magic with voice commands.</p>
        <button onClick={() => navigate("/step2")}>Next</button>
    </motion.div>
    );
};

export default OnboardingStep1;
