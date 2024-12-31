import Navbar from "./Navbar"
import headCover from "../assets/Group.svg"
import oneview from "../assets/Vector.svg"
import { GoArrowUpRight } from "react-icons/go";

const Head = () => {
    return (
        <div className="flex justify-center pt-2 px-2 underline-offset-4">
            <section className={`bg-[url(${headCover})`}>
                <div className="pt-4 "><img className="w-40" src="https://s3-alpha-sig.figma.com/img/6266/135e/63d3f1167902fea7d42eddd50674f57d?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kzboKgnGnToggTGqzysZcoFKnpa3V8Fe4WS5CvgWETe6wnh3In7JQmfw9weCHB7e54xQI8bf8dG7HwWhE-kAC39tG-RmyW~bq~YsVIpJ4cybTDEAp4qAOKgQVwdicGMDr2TlDDOZ6f4OSR2LH-eHCWuUBH2uZVP0KN2ojrsdYthd8~V7DHmF9h0KBBEBKqmOyFJxONiigifMEmCEUHNlKOro~Rms9xiMRjUjKQ~Ygx7W4tvWX5usOyps60~6sjSf~nc71Vj-zwlRXzINoSqlrYfKjFzn1J2iq9DpWtTQ9kGnYaiP5kd9j~cbWfUdZuPZ8FjQfbe8jh5HRCq2oyWhfA__" alt="" /></div>
                <div className="pt-20">
                    <div className="text-5xl font-semibold ml-20 ">
                        Empowering <i className="text-green-500">Growth,</i> One <br />Step at a Time
                    </div>
                    <div className="ml-20 py-4 font-semibold">
                        <p>Compassionate care and tailored therapies for individuals with autism and their families</p>
                    </div>
                    <div className="flex ml-20 gap-4 py-4">
                        <button className="text-gray-400 font-semibold border-gray-400 border-2 px-2">Learn More</button>
                        <button className="bg-green-500 flex p-2 gap-2 items-center">
                            <p><img src={oneview} alt="" /></p>
                            <p className="font-semibold text-white">Schedule an Appointment</p>
                        </button>   
                    </div>

                    <div className="py-10 ml-20  grid grid-cols-3 gap-2">
                        <button className="flex justify-center bg-green-500 p-2 items-center rounded-3xl">
                            <p className="text-white text-md">Child care</p>
                            <p><GoArrowUpRight color="white" fontSize={18}/></p>
                        </button>
                        <button className="flex justify-center bg-green-500 p-2 items-center rounded-3xl">
                            <p className="text-white text-md">Child care</p>
                            <p><GoArrowUpRight color="white" fontSize={18} /></p>
                        </button>
                        <button className="flex justify-center bg-green-500 p-2 items-center mr-3 rounded-3xl">
                            <p className="text-white text-md">Child care</p>
                            <p><GoArrowUpRight color="white" fontSize={18} /></p>
                        </button>
                        <button className="flex justify-center bg-green-500 p-2 items-center rounded-3xl">
                            <p className="text-white text-md">Child care</p>
                            <p><GoArrowUpRight color="white" fontSize={18} /></p>
                        </button>
                        <button className="flex justify-center bg-green-500 p-2 items-center rounded-3xl">
                            <p className="text-white text-md">Child care</p>
                            <p><GoArrowUpRight color="white" fontSize={18} /></p>
                        </button>
                        
                    </div>
                </div>
            </section>
            <section className="w-full rounded-md  h-screen bg-[url('https://s3-alpha-sig.figma.com/img/e376/ff49/b772255dc9f462388d9989292be0c7bc?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QGooFbc3UmijXb0j6jbKazo3tJvhlzIO~YBqa2S2pa-4YY7n-Ji8nTqo4zfAT5xOUhIxrGkqA4hUAsC5tuexHitq62D83YI6-qLCI0r3xovjNHAp1HJet8TQcEOwW7IlmzMA2dyRIKr-d8k-0OnmGW6iYw3~Lh808WfkxkzSvBZrA3CHHtmSt3HkrxtvxZl8UcmFjNR0qP-zBMOUkfBRi9tLFs4vZl6gFeXwGiQGaBuzBUyCwg2wORuRT-4zcdpq9NN6191GVyGHvs5HcU6Imc6yRJ~iNjOb2FVvNixNvAKED2kaZ8D9Rl8B1rIhTnW-OLZZOMlAmNWJce131nGIkw__')]">
                <Navbar />
            </section>
        </div>
        
    )
}

export default Head