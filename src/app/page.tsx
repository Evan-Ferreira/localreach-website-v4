import Image from 'next/image';
import Landing from './_sections/landing';
import Tabs from './_sections/Tabs';

export default function Home() {
    return (
        <div>
            <Landing />
            <Tabs></Tabs>
        </div>
    );
}
