import { Text } from "./Text"
import { TeamTexts } from "./Data";
import emp1 from "../Team/Nithesh-pic.jpeg" //Nishanth
import emp2 from "../Team/Nithesh-pic.jpeg" //Nithesh
import emp3 from "../Team/Nithesh-pic.jpeg" //Mithilesh
import emp4 from "../Team/Nithesh-pic.jpeg" //Vasanth
import { useCallback } from "react";
import Slider from "react-slick";
import { Card } from "./Card";
import { Image } from "./Image";
import { UsersThree, LinkedinLogo } from "@phosphor-icons/react";

const Teammembers = () => {

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        cssEase: "linear",
        nextArrow: <br />,
        prevArrow: <br />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    const renderClients = useCallback((element: number) => {
        switch (element) {
            case 0:
                return emp1.src;
            case 1:
                return emp2.src;
            case 2:
                return emp3.src;
            case 3:
                return emp4.src;
            default:
                return "";
        }
    }, [])
    return (
        <section className="w-full h-auto flex items-center bg-zinc-950">
            <div className="w-full lg:h-[700px] md:h-[600px] flex flex-col justify-center items-center gap-10 md:gap-10 py-12 md:py-0">

                <div className="flex flex-col mt-10 items-center relative before:absolute before:-bottom-6 before:left-30 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                    <Text as="p" className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">{TeamTexts.firstText}</Text>
                    <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">{TeamTexts.secondText}</Text>
                    {/* <Text as="h1" className="absolute text-zinc-500/20 md:left-24 lg:left-28 left-20 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10">05</Text> */}
                    <Text as="h1" className="absolute text-cyan-500 md:left-24 lg:left-40 left-20 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10" >
                        <UsersThree size={80} color="currentColor" weight="fill" />
                    </Text>
                </div>

                {/* Team members */}
                <div className="w-full lg:px-8 md:px-2 h-auto mt-4">
                    <Slider {...settings}>
                        {
                            TeamTexts.feedBacks.map((feedback, index) => (
                                <div key={index} className="lg:px-6 md:px-4 w-full px-3">
                                    <Card className="bg-zinc-800 w-full h-[250px] grid grid-cols-3 border-[0.1rem] border-pink-500/30">
                                        <div className="flex flex-col justify-center items-center md:justify-start gap-1 col-span-2 lg:p-8 p-4 h-full">
                                            <Text as="h2" className="md:text-xl text-lg font-semibold text-zinc-300">{feedback.person}</Text>
                                            <Text as="h6" className="text-amber-500 text-sm uppercase">{feedback.type}</Text>
                                            <Text as="h2" className="text-cyan-500 text-sm uppercase">{feedback.caption}</Text>
                                            <a
                                                href={feedback.linkedInProfile}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center mt-4 text-amber-500"
                                            >
                                                <LinkedinLogo size={20} className="text-fuchsia-500" weight="light" />
                                            </a>
                                        </div>
                                        <Image className="" objectCover="object-cover" image={renderClients(index)} alt={feedback.person} />
                                    </Card>
                                </div>

                            ))
                        }
                    </Slider>
                </div>

            </div>

        </section>
    )
}

export default Teammembers