import React from 'react';
import Footer from '../components/Footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { InstagramEmbed } from 'react-social-media-embed';
import IMG_3271 from '../images/october_photos/IMG_3271.jpeg';
import IMG_3272 from '../images/october_photos/IMG_3272.jpeg';
import IMG_3274 from '../images/october_photos/IMG_3274.jpeg';
import IMG_3277 from '../images/october_photos/IMG_3277.jpeg';
import IMG_3280 from '../images/october_photos/IMG_3280.jpeg';
import IMG_3289 from '../images/october_photos/IMG_3289.jpeg';
import IMG_3293 from '../images/october_photos/IMG_3293.jpeg';
import IMG_3294 from '../images/october_photos/IMG_3294.jpeg';
import IMG_3295 from '../images/october_photos/IMG_3295.jpeg';
import IMG_3297 from '../images/october_photos/IMG_3297.jpeg';
import IMG_3300 from '../images/october_photos/IMG_3300.jpeg';
import IMG_3301 from '../images/october_photos/IMG_3301.jpeg';
import IMG_3302 from '../images/october_photos/IMG_3302.jpeg';
import IMG_3306 from '../images/october_photos/IMG_3306.jpeg';
import IMG_3315 from '../images/october_photos/IMG_3315.jpeg';
import IMG_3317 from '../images/october_photos/IMG_3317.jpeg';
import IMG_3322 from '../images/october_photos/IMG_3322.jpeg';
import IMG_3325 from '../images/october_photos/IMG_3325.jpeg';
import IMG_3328 from '../images/october_photos/IMG_3328.jpeg';
import IMG_3335 from '../images/october_photos/IMG_3335.jpeg';

import IMG_6379 from '../images/november_photos/IMG_6379.jpeg';
import IMG_6380 from '../images/november_photos/IMG_6380.jpeg';
import IMG_6381 from '../images/november_photos/IMG_6381.jpeg';
import IMG_6382 from '../images/november_photos/IMG_6382.jpeg';
import IMG_6383 from '../images/november_photos/IMG_6383.jpeg';
import IMG_6384 from '../images/november_photos/IMG_6384.jpeg';

const octoberPhotos = [
    IMG_3271,
    IMG_3272,
    IMG_3274,
    IMG_3277,
    IMG_3280,
    IMG_3289,
    IMG_3293,
    IMG_3294,
    IMG_3295,
    IMG_3297,
    IMG_3300,
    IMG_3301,
    IMG_3302,
    IMG_3306,
    IMG_3315,
    IMG_3317,
    IMG_3322,
    IMG_3325,
    IMG_3328,
    IMG_3335
];

const novemberPhotos = [IMG_6379, IMG_6380, IMG_6381, IMG_6382, IMG_6383, IMG_6384];

function ProjectsPage() {
    return (
        <div className="flex flex-col h-screen items-center justify-between">
            <div className="mt-24 px-1 flex-col flex items-center justify-around">
                {/* 2023-2024 */}
                <h1 className="text-gray-900 text-4xl font-bold mb-8">2023-2024 Projects</h1>
                <h1>Coming Soon!</h1>
                {/* 2022-2023 */}
                <h1 className="text-gray-900 mt-8 text-4xl font-bold mb-8">2022-2023 Projects</h1>
                <div className="flex-col flex items-center justify-around ">
                    {/* september */}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/drive/folders/1-0WzQoZWG-Tru9FfK4ATCzR9zdZdoK-D">
                        <h2 className="underline text-red-500 text-2xl mb-8">
                            September: Suicide Prevention & Mental Health Awareness
                        </h2>
                    </a>
                    <div className="flex justify-center gap-8">
                        <InstagramEmbed
                            url="https://www.instagram.com/p/CigKab5JFba/"
                            width={328}
                            height={630}
                        />
                        <InstagramEmbed
                            url="https://www.instagram.com/p/Cip7cC_uwap/"
                            width={328}
                        />
                        <InstagramEmbed url="https://www.instagram.com/p/Cix8YeCJDGT" width={328} />
                    </div>
                    {/* october */}

                    <h2 className="text-2xl mb-8 mt-12">
                        October:
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-red-500"
                            href="https://drive.google.com/drive/folders/1-0WzQoZWG-Tru9FfK4ATCzR9zdZdoK-D">
                            {' '}
                            Substance Abuse Prevention{' '}
                        </a>
                        &
                        <a
                            target="_blank"
                            className="underline text-red-500"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/drive/folders/1-3vIKU1bNzD-yUZDx-lO38_PAdmyWHI-">
                            {' '}
                            Red Ribbon Week
                        </a>
                    </h2>

                    <div className="flex justify-center gap-8">
                        <InstagramEmbed
                            url="https://www.instagram.com/p/CjV6JZ3pNbF/"
                            width={328}
                            height={630}
                        />
                        <InstagramEmbed
                            url="https://www.instagram.com/p/CkRpNAspz8B/"
                            width={328}
                            height={630}
                        />
                        <InstagramEmbed
                            url="https://www.instagram.com/p/CkKA-F9JyTu/"
                            width={328}
                            height={650}
                        />
                    </div>
                    <div className="w-4/12 mt-8">
                        <Carousel
                            stopOnHover={false}
                            showThumbs={false}
                            showIndicators={false}
                            autoPlay
                            infiniteLoop>
                            {octoberPhotos.map((image) => (
                                <img
                                    key={image}
                                    className="object-cover w-full h-full"
                                    src={image}
                                    alt=""
                                />
                            ))}
                        </Carousel>
                    </div>
                    {/* november */}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/drive/folders/1-2X962Cij6OZRLD5BjDwHC55u_7AREpk">
                        <h2 className="underline text-red-500 text-2xl mb-8 mt-12">
                            November: Body Image/eating disorders:
                        </h2>
                    </a>
                    <div className="w-4/12">
                        <Carousel showThumbs={false} showIndicators={false} autoPlay infiniteLoop>
                            {novemberPhotos.map((image) => (
                                <img
                                    key={image}
                                    className="object-cover w-full h-full"
                                    src={image}
                                    alt=""
                                />
                            ))}
                        </Carousel>
                    </div>

                    <h2 className="text-2xl mb-8 mt-12">December:</h2>
                    <InstagramEmbed
                        url="https://www.instagram.com/p/CmKo3-EpPqa/"
                        width={328}
                        height={630}
                    />
                    {/* february */}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/drive/folders/1E2cTBN7sXNcwp6RvVRQRrm4FWove1_t5">
                        <h2 className="underline text-red-500 text-2xl mb-8 mt-12">February:</h2>
                    </a>
                    <div className="flex justify-center gap-8">
                        <InstagramEmbed
                            url="https://www.instagram.com/p/CoSkBaNOb4B/"
                            width={328}
                            height={630}
                        />
                        <InstagramEmbed
                            url="https://www.instagram.com/p/Coknwz9unKp/"
                            width={328}
                        />
                        <InstagramEmbed url="https://www.instagram.com/p/CouMZz2OtxQ" width={328} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectsPage;
