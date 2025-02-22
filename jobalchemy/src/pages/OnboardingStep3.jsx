import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const OnboardingStep3 = () => {
    const navigate = useNavigate();
    
    return (
    <motion.div 
    className="container"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    >
        <h1>You&apos;re Ready!</h1>
        <p>Start exploring the magic of Alchemy.</p>
        <button onClick={() => navigate("/")}>Get Started</button>
    </motion.div>
    );
};

export default OnboardingStep3;
