import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const landingPageLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default landingPageLayout;
