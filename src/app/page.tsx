import HowItWorks from './_sections/howitworks';
import ContactUs from './_sections/contactUs';
import Landing from './_sections/landing';
import Tabs from './_sections/Tabs';

export default function Home() {
    return (
        <div>
            <Landing />
            <Tabs></Tabs>
            <HowItWorks></HowItWorks>
            <ContactUs />
        </div>
    );
}
