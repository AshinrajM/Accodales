
const Card = () => {
    return (
        <section className="bg-white w-72 h-auto p-4 mx-52 rounded-3xl shadow-2xl">
            <img className="w-64 rounded-2xl" src="https://s3-alpha-sig.figma.com/img/6c09/d537/1f1d524a86ec73aa762448a1aa35fda0?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D4--fUDIPQwUCuK-Sqm~7A4JquTNIkuZGg00dXu1xWs6NaG0hiXh2pFcO-U6geUHlZARl~jpqouH~L-qx~W4WzhbHXSL~KajpUjr69GKgeE-3cPw7WWkObhFbTGgz2g0r~qa0xi5C9bZW9Xtgrl~fSEQh6smXV2NBZJvh3HGxwqRUxtFs10ImBiDGlHVAEkYHjrLiWgC3H2jDY4hDxxOZN0it8qdFHEWVrrNBegkFwk5W~QPI4EGYUxtQ2EHv3nLyZ0pGOqNI-aOGGhcr0gHdOadVaX90zodMGrsA7L-T6TjqBnORMG6AJ~-lBlDUYL1f~tf5y6S6q5Mn2FjaWmGlg__" alt="" />

            <p className="flex justify-start font-semibold text-lg mt-2 mx-2">Speech And Language Pathology</p>
            <p className="text-xs mx-2">
                Speech and language pathology is a field of expertise practised by speech-language pathologist. It is beneficial mainly in speech and communication disorders. It is done in cases like stroke where the speech is lost, but most commonly this department deals with children with developmental or communication disorders.
            </p>
            <div className="flex mt-4 gap-2 justify-center">
                <button className="text-sm text-black bg-gray-300 font-semibold px-4 py-2">More Details</button>
                <button className="text-sm bg-green-600 text-white px-6 py-2">Enquire Now</button>
            </div>
        </section>
    )
}

export default Card