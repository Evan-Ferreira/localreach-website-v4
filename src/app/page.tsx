import HowItWorks from './_sections/howitworks';
import ContactUs from './_sections/contactUs';
import Landing from './_sections/landing';
import Tabs from './_sections/Tabs';
import Blog from './_sections/blog';
import Blob from './_components/blob';

export default function Home() {
    return (
        <div>
            <Landing />
            <div className="h-full w-full flex flex-col">
                <Tabs></Tabs>
                <HowItWorks></HowItWorks>
                <Blog></Blog>
                <ContactUs />
                <Blob />
            </div>
        </div>
    );
}
