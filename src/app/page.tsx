import HowItWorks from './_sections/howitworks';
import ContactUs from './_sections/contactUs';
import Landing from './_sections/landing';
import Tabs from './_sections/Tabs';
import Blog from './_sections/blog';

export default function Home() {
    return (
        <div>
            <Landing />
            <Tabs></Tabs>
            <HowItWorks></HowItWorks>
            <Blog></Blog>
            <ContactUs />
        </div>
    );
}
