import Card from "./Card"

const Mid = () => {
    return (
        <>
            <section className="mt-20">
                <p className="text-3xl font-bold flex justify-center">Best &nbsp; <i className="text-green-600">Autism</i> &nbsp; Treatment Center in</p>
                <p className="text-3xl font-bold flex justify-center">Kochi | Kerala | India</p>
                <p className="text-md  text-gray-600 flex justify-center mx-52 mt-4">With our innovative blend of the goodness of Ayurveda, modern medical research, cutting-edge technology and proven tools. Jeevaniyam offers the best autism treatment in Kerala, India. Read more to find out how your special child can have a future as bright and fulfilling as any of its peers. And, save yourself countless panic attacks and sleepless nights.</p>
                <div className="flex justify-center gap-4 mt-4">
                    <button className="text-gray-600 font-semibold border-gray-600  p-2 rounded-xl">Know more</button>
                    <button className="bg-green-500 text-white p-2 rounded-xl">Download Brouchure</button>
                </div>
            </section>
            <section className=" flex ">
                <Card />

            </section>
        </>
    )
}

export default Mid