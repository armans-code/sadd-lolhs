import { useEffect } from 'react';
import './ContactPage.css';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';

function ContactPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="flex flex-col items-center justify-between h-screen">
            <div data-aos="fade-up" className="mt-28">
                <div class="flex flex-wrap justify-center text-center mb-24">
                    <div class="w-full lg:w-9/12 px-4">
                        <h1 class="text-gray-900 text-4xl font-bold mb-8">Reach out to us!</h1>

                        <p class="text-gray-700 text-lg font-light">
                            Feel free to email any officers for questions or concerns! You can also
                            visit our club sponsor, Ms. Smith, in room 416 or email:
                        </p>

                        <div
                            className="rounded-full cursor-pointer"
                            onClick={() => {
                                navigator.clipboard.writeText('aksmith@pasco.k12.fl.us');
                                toast('Copied email to clipboard!');
                            }}>
                            <div className="bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg">
                                <h1 class="text-6xl font-light tracking-wide bg-gray-500 mt-8 p-4 gradient_text ">
                                    aksmith@pasco.k12.fl.us
                                </h1>
                            </div>
                        </div>
                        <h1 class="text-gray-900 text-4xl font-bold mb-8 mt-24 w-full">
                            Follow our Instagram
                        </h1>

                        <p class="text-gray-700 text-lg font-light">
                            Follow our chapter's Instagram account for updates and photos!
                        </p>

                        <a
                            href="https://www.instagram.com/lolhs_sadd/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full">
                            <div className="bg-gray-100 rounded-lg transition-all duration-300 hover:shadow-lg">
                                <h1 class="text-6xl font-light tracking-wide bg-gray-500 mt-8 p-4 instagram_text ">
                                    @sadd_lolhs
                                </h1>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ContactPage;
